import React, { memo, useState, useEffect, useRef, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import {
  getSongDetailAction,
  setSequenceAction,
  changeMusicAction,
  changeLyricIndexAction
} from "../store/actionCreators";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

import { Slider, message } from "antd";

import { getSizeImage, getPlayUrl } from "@/utils/format-utils";

import dayjs from "dayjs";

export default memo(function AppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0); // s
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 发送异步请求 将数据存放到reducer中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  // 将数据从reducer中获取
  let { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(
    state => ({
      currentSong: state.getIn(["player", "songDetail"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    })
  );

  // 设置当前音乐的源文件
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then(res => {
        setIsPlaying(true);
      })
      .catch(err => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  // 解析数据
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0; // ms

  // other hooks
  const audioRef = useRef();

  // handle function
  // 获取音乐源文件
  const playMusic = useCallback(
    function () {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    },
    [isPlaying]
  );

  // 设置音乐的当前播放的时间
  function timeUpdate(e) {
    const _currentTime = e.target.currentTime * 1000; // ms

    if (!isChanging) {
      setCurrentTime(e.target.currentTime);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 获取当前的歌词对应的_Index
    let _index;
    let i = 0;
    for (i in lyricList) {
      if (_currentTime < lyricList[i].time) {
        _index = i - 1;
        break;
      }
    }

    if (currentLyricIndex !== _index) {
      dispatch(changeLyricIndexAction(_index));
      const content = lyricList[_index] && lyricList[_index].content;
      message.open({
        content: content,
        key: "lyric",
        duration: 0
      });
    }
  }

  // 音乐播放结束
  // 获取当前音乐播放模式
  function MusicEnd(e) {
    switch (sequence) {
      case 2: //单曲循环
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        break;

      default:
        // 相当于下一曲
        dispatch(changeMusicAction(1));
    }
  }

  // 当滑块改变
  const slideChange = useCallback(
    function (value) {
      // 阻止默认默认的播放
      setIsChanging(true);
      // 获取滑块对应位置的时间
      const time = ((value / 100) * duration) / 1000;
      // 设置滚动条
      setProgress(value);
      // 设置当前音乐播放时间
      setCurrentTime(time);
    },
    [duration]
  );

  // 改变完成之后 鼠标抬起时触发
  const slideAfterChange = useCallback(
    function (value) {
      // 获取滑块对应位置的时间
      const time = ((value / 100) * duration) / 1000;
      // 从鼠标抬起滑块对应的时间开始播放音乐
      audioRef.current.currentTime = time;
      // 设置当前音乐播放时间
      // setCurrentTime(time);
      // 恢复默认的播放
      setIsChanging(false);
      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  // 切换播放模式
  const changeSequence = () => {
    sequence = sequence + 1;
    if (sequence > 2) {
      sequence = 0;
    }
    dispatch(setSequenceAction(sequence));
  };

  // 上一曲 下一曲
  function changeMusic(tag) {
    dispatch(changeMusicAction(tag));
  }

  // 返回的jsx
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="prev sprite_player"
            onClick={e => changeMusic(-1)}
          ></button>
          <button
            className="play sprite_player"
            onClick={e => playMusic()}
          ></button>
          <button
            className="next sprite_player"
            onClick={e => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 39)} alt="111" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span>{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={slideChange}
                onAfterChange={slideAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {dayjs.unix(currentTime).format("mm:ss")}
                </span>
                <span className="divider">/</span>
                <span>{dayjs(duration).format("mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="btn favor sprite_player"></button>
            <button className="btn share sprite_player"></button>
          </div>
          <div className="right">
            <button className="btn volume sprite_player"></button>
            <button
              className="btn loop sprite_player"
              onClick={changeSequence}
            ></button>
            <button className="btn playlist sprite_player"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={MusicEnd} />
    </PlaybarWrapper>
  );
});

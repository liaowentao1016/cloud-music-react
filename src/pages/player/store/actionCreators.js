import {
  CHANGE_SONG_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_SONG_CURRENT_INDEX,
  CHANGE_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from "./contants";

import { getSongDetail, getLyric } from "@/services/player";

import { parseLyric } from "@/utils/parse-lyric";

const changeSongDetail = res => ({
  type: CHANGE_SONG_DETAIL,
  songDetail: res
});

const changePlayListAction = playList => ({
  type: CHANGE_PLAY_LIST,
  playList
});

const changeCurrentIndexAction = index => ({
  type: CHANGE_SONG_CURRENT_INDEX,
  index
});

const changeLyricListAction = lyricList => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
});

// 获取当前播放歌曲信息
export function getSongDetailAction(ids) {
  return (dispatch, getstate) => {
    // 1. 根据ID查看该歌曲是否已经在playList中
    const playList = getstate().getIn(["player", "playList"]);
    const songIndex = playList.findIndex(item => item.id === ids);
    // 2. 判断
    if (songIndex !== -1) {
      // 已经在playList中
      dispatch(changeCurrentIndexAction(songIndex));
      dispatch(changeSongDetail(playList[songIndex]));
      // 请求歌词
      dispatch(getLyricAction(ids));
    } else {
      // 不在playList中
      // 发送请求 获取歌曲信息
      getSongDetail(ids).then(res => {
        const songInfo = res.songs && res.songs[0];
        if (!songInfo) return;
        // 将歌曲添加到playList中
        const newPlayList = [...playList];
        newPlayList.push(songInfo);
        dispatch(changePlayListAction(newPlayList));
        // 将当前播放的歌曲信息 个 下标进行更新
        dispatch(changeSongDetail(songInfo));
        dispatch(changeCurrentIndexAction(newPlayList.length - 1));
        // 请求歌词
        dispatch(getLyricAction(ids));
      });
    }
  };
}

// 设置歌曲播放模式
export function setSequenceAction(sequence) {
  return {
    type: CHANGE_SEQUENCE,
    sequence
  };
}

// 切换歌曲
export function changeMusicAction(tag) {
  return (dispatch, getstate) => {
    const playList = getstate().getIn(["player", "playList"]);
    let currentIndex = getstate().getIn(["player", "currentIndex"]);
    const sequence = getstate().getIn(["player", "sequence"]);
    // 判断当前音乐播放是什么模式
    switch (sequence) {
      case 1: // 随机播放
        // 生成随机的Index
        let radomIndex = Math.floor(Math.random() * playList.length);
        while (radomIndex === currentIndex) {
          radomIndex = Math.floor(Math.random() * playList.length);
        }
        currentIndex = radomIndex;
        break;

      default:
        // 顺序循环播放
        currentIndex += tag;
        if (currentIndex >= playList.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = playList.length - 1;
    }
    // 切换歌曲
    dispatch(changeCurrentIndexAction(currentIndex));
    dispatch(changeSongDetail(playList[currentIndex]));
    // 请求歌词
    dispatch(getLyricAction(playList[currentIndex].id));
  };
}

// 获取全部歌词信息
export function getLyricAction(id) {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList));
    });
  };
}

// 获取当前歌词对象
export function changeLyricIndexAction(_index) {
  return {
    type: CHANGE_CURRENT_LYRIC_INDEX,
    _index
  };
}

import React, { memo } from "react";

import { RankingItemWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

import { getSongDetailAction } from "@/pages/player/store/actionCreators";
import { useDispatch } from "react-redux";

export default memo(function RankingItem(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // handle function
  const playMusic = item => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="图片加载失败" />
          <a href="todo" className="image_cover">
            背景图
          </a>
        </div>
        <div className="info">
          <a href="todo">{info.name}</a>
          <div>
            <div className="btn play sprite_02"></div>
            <div className="btn favor sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name text-nowrap">{item.name}</div>
                <div className="operate">
                  <button
                    className="btn play sprite_02"
                    onClick={e => playMusic(item)}
                  ></button>
                  <button className="btn addto sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  );
});

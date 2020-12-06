import React, { memo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getEnterSingerAction } from "../../store/actionCreators";

import { EnterSingerWrapper } from "./style";

import ThemeHeaderSmall from "@/components/theme-header-small";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function EnterSinger() {
  // 处理异步请求 将数据存放在reducer中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnterSingerAction(5, 5001));
  }, [dispatch]);

  // 从reducer中将数据取出来
  const enterSinger = useSelector(state =>
    state.getIn(["recommend", "enterSinger"])
  );

  return (
    <EnterSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
      <div className="singer-list">
        {enterSinger.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <button className="btn">申请成为网易音乐人</button>
    </EnterSingerWrapper>
  );
});

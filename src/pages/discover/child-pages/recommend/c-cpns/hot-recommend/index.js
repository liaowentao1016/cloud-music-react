import React, { memo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";

import { HotRecommendWrapper } from "./style";

import ThemeHeader from "@/components/theme-header-rcm";

import SongsCover from "@/components/songs-cover";

export default memo(function HotRecommend() {
  // redux-hooks
  const hotRecommend = useSelector(state =>
    state.getIn(["recommend", "hotRecommend"])
  );
  const dispatch = useDispatch();

  // 派发异步action 将请求的数据存放在redux中
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeader
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommend.map((item, index) => {
          return <SongsCover info={item} key={item.id} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

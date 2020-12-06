import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecRankingAction } from "../../store/actionCreators";

import { RankingWrapper } from "./style";

import ThemeHeader from "@/components/theme-header-rcm";

import RankingItem from "@/components/top-ranking";

export default memo(function RecommendRanking() {
  // 发送异步请求 将数据存入reducer中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecRankingAction(0));
    dispatch(getRecRankingAction(2));
    dispatch(getRecRankingAction(3));
  }, [dispatch]);

  // 从reducer中获取数据
  const { topRanking, newRanking, originRanking } = useSelector(state => ({
    topRanking: state.getIn(["recommend", "topRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }));

  // 导出的jsx
  return (
    <RankingWrapper>
      <ThemeHeader title="榜单" />
      <div className="tops">
        <RankingItem info={topRanking} />
        <RankingItem info={newRanking} />
        <RankingItem info={originRanking} />
      </div>
    </RankingWrapper>
  );
});

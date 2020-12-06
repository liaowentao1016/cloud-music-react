import React, { memo } from "react";

import TopBanners from "./c-cpns/top-banner";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

import HotRecommend from "./c-cpns/hot-recommend";

import NewAlbums from "./c-cpns/new-album";

import RecRanking from "./c-cpns/recommend-ranking";

import UserLogin from "./c-cpns/user-login";

import EnterSinger from "./c-cpns/enter-singer";

import HotAnchor from "./c-cpns/hot-anchor";

// function LQRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>LQRecommend组件:{topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getToBannersAction());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(LQRecommend));

function LQRecommend(props) {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbums />
          <RecRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <EnterSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(LQRecommend);

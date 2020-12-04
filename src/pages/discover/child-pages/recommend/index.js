import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getToBannersAction } from "./store/actionCreators";

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
  // 利用reduxHooks 让组件与redux关联 获取数据
  // shallowEqual优化 避免不必要的渲染
  const { topBanners } = useSelector(
    state => ({
      // 因为state数据现在是 immutable对象 所以取值按这种方式
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"])
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // 模拟生命周期 发送网络请求
  useEffect(() => {
    dispatch(getToBannersAction());
  }, [dispatch]);

  return (
    <div>
      <h2>LQRecommend组件:{topBanners.length}</h2>
    </div>
  );
}

export default memo(LQRecommend);

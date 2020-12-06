import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getToBannersAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";

export default memo(function TopBanners() {
  // state数据
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const bannerRef = useRef();

  // 模拟生命周期 发送网络请求
  useEffect(() => {
    dispatch(getToBannersAction());
  }, [dispatch]);

  // 更换高斯模糊图
  // 如果将一个函数作为参数传入子组件中 用useCallBack将该函数进行一个包裹
  // useCallback 可以对当前函数进行一个缓存记忆，返回的函数指向同一个引用
  // 避免不必要的渲染子组件从而提高性能
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  // 返回的jsx
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            autoplaySpeed={5000}
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.targetId}>
                  <img
                    src={item.imageUrl}
                    alt={item.typeTitle}
                    className="image"
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={e => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={e => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

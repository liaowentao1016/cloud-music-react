import React, { memo, useEffect, useRef } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";

import ThemeHeader from "@/components/theme-header-rcm";
import { AlbumWrapper } from "./style";

import AlbumCover from "@/components/album-cover";

export default memo(function NewAlbum() {
  // redux hooks
  // 1.将数据存放到reducer中
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  // 2从reducer中取数据
  const newAlbums = useSelector(
    state => state.getIn(["recommend", "newAlbums"]),
    shallowEqual
  );

  // 将一个一维数组转为二维数组
  // function toDoubleArr(linearArr, num) {
  //   // 定义一个空的二维数组
  //   const doubleArr = [];
  //   for (let i = 0; i < linearArr.length; i + num) {
  //     const arr = linearArr.splice(i, num);
  //     doubleArr.push(arr);
  //   }
  //   return doubleArr;
  // }
  // const doubleArr = toDoubleArr(newAlbums, 5);

  const CarouselRef = useRef();
  // 返回的jsx
  return (
    <AlbumWrapper>
      <ThemeHeader title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={e => CarouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel dots={false} ref={CarouselRef}>
            {[0, 1].map((item, index) => {
              return (
                <div className="page" key={index}>
                  {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten, indey) => {
                      return (
                        <AlbumCover
                          key={indey}
                          info={iten}
                          width={118}
                          height={100}
                          bgp="-570px"
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={e => CarouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
});

import React, { memo } from "react";

import { AlbumWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function AlbumCover(props) {
  const { info, width = 153, height = 130, bgp = "-845px" } = props;
  return (
    <AlbumWrapper width={width} height={height} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, height)} alt="图片加载失败" />
        {/* a为外层遮罩层*/}
        <a href="/todo" className="cover sprite_covor">
          背景
        </a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});

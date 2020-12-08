import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function LQPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playInfo组件</h2>
          <h2>评论组件</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>songList组件</h2>
          <h2>simiPlayList组件</h2>
          <h2>downLoad组件</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});

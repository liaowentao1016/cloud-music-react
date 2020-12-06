import React, { memo } from "react";

import { ThemeHeaderSmallWrapper } from "./style";

export default memo(function ThemeHeaderSmall(props) {
  const { title, more } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <div className="left">{title}</div>
      <a className="right" href="todo">
        {more || ""}
      </a>
    </ThemeHeaderSmallWrapper>
  );
});

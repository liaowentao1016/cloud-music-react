import React, { memo } from "react";

import propTypes from "prop-types";

import { ThemeHeaderWrapper } from "./style";

const ThemeHeader = memo(function (props) {
  const { title, keywords } = props;

  return (
    <ThemeHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={index}>
                <a href="todo">{item}</a>
                <i className="divider">
                  {index < keywords.length - 1 ? "|" : null}
                </i>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <div className="icon sprite_02"></div>
      </div>
    </ThemeHeaderWrapper>
  );
});

// 属性验证
ThemeHeader.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array
};

// 默认值
ThemeHeader.defaultProps = {
  keywords: []
};

export default ThemeHeader;

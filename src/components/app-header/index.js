import React, { memo } from "react";

import { NavLink } from "react-router-dom";

import { HomeWrapper } from "./style";

import { headerLinks } from "@/common/local-data.js";

import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function LQAppFooter() {
  // 显示selectItem 前三个渲染成NavLink 后三个渲染成a元素
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  // 返回的jsx
  return (
    <HomeWrapper>
      <div className="content wrap-v1">
        <div className="left">
          <a href="/#" className="logo sprite_01">
            云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <Button type="text" className="login">
            登录
          </Button>
        </div>
      </div>
      <div className="line"></div>
    </HomeWrapper>
  );
});

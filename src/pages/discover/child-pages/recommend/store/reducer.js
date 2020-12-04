import { CHANGE_TOP_BANNERS } from "./constants";

// 利用 immutable.js 来管理state数据 有利于提高性能
// 内部算法 更大程度上的复用state数据 ， 避免拷贝带来的占用内存的问题

import { Map } from "immutable";
const defaultState = Map({
  topBanners: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);

    default:
      return state;
  }
}

export default reducer;

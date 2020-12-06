import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_ENTER_SINGER
} from "./constants";

// 利用 immutable.js 来管理state数据 有利于提高性能
// 内部算法 更大程度上的复用state数据 ， 避免拷贝带来的占用内存的问题
// 对象 用Map 包裹
// 数组 用List包裹
// fromJS深层比较
import { Map } from "immutable";
const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],

  topRanking: {},
  newRanking: {},
  originRanking: {},

  enterSinger: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);

    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);

    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case CHANGE_TOP_RANKING:
      return state.set("topRanking", action.topRanking);

    case CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);

    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);

    case CHANGE_ENTER_SINGER:
      return state.set("enterSinger", action.enterSinger);

    default:
      return state;
  }
}

export default reducer;

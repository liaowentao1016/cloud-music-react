import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_ENTER_SINGER
} from "./constants";

import {
  getTopBanner,
  getHotRecommends,
  getNewAlbum,
  getRankingList,
  getArtistList
} from "@/services/recommend";

// 同步的action 真正触发reducer的actions
const changeTopBannerAction = res => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeHotRecommendAction = res => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
});

const changeNewAlbumAction = res => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums: res.albums
});

// 推荐榜单之飙升榜
const changeTopRankingAction = res => ({
  type: CHANGE_TOP_RANKING,
  topRanking: res.playlist
});

// 推荐榜单之新歌榜
const changeNewRankingAction = res => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist
});

// 推荐榜单之原创榜
const changeOriginRankingAction = res => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
});

// 入驻歌手
const changeEnterSingerAction = res => ({
  type: CHANGE_ENTER_SINGER,
  enterSinger: res.artists
});

// 轮播图数据处理
export const getToBannersAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      // 派发同步的action 用于保存请求的banners
      dispatch(changeTopBannerAction(res));
    });
  };
};

// 热门推荐数据处理
export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // 派发同步的action 用于保存请求的数据
      dispatch(changeHotRecommendAction(res));
    });
  };
};

// 新碟上架数据处理
export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

// 推荐榜单数据
export const getRecRankingAction = idx => {
  return dispatch => {
    getRankingList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeTopRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};

// 入驻歌手数据
export const getEnterSingerAction = (limit, cat) => {
  return dispatch => {
    getArtistList(limit, cat).then(res => {
      dispatch(changeEnterSingerAction(res));
    });
  };
};

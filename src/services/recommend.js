import request from "./request";

// 轮播图数据
export function getTopBanner() {
  return request({
    url: "/banner"
  });
}

// 热门推荐数据
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  });
}

// 新碟上架数据
export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  });
}

// 榜单列表数据
export function getRankingList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  });
}

// 入驻歌手数据
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  });
}

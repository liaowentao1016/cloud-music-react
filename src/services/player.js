import request from "./request";

// 请求歌曲信息
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  });
}

// 请求歌词
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  });
}

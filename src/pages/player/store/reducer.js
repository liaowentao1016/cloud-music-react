import { Map } from "immutable";
import {
  CHANGE_SONG_DETAIL,
  CHANGE_PLAY_LIST,
  CHANGE_SONG_CURRENT_INDEX,
  CHANGE_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from "./contants";

const defaultState = Map({
  songDetail: {},
  playList: [
    {
      name: "有何不可",
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: "许嵩",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "600902000007916021",
      fee: 8,
      v: 49,
      crbt: null,
      cf: "",
      al: {
        id: 16953,
        name: "自定义",
        picUrl:
          "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        tns: [],
        pic_str: "18590542604286213",
        pic: 18590542604286212
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900
      },
      a: null,
      cd: "1",
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 14026,
      mv: 0,
      rtype: 0,
      rurl: null,
      publishTime: 1231516800000
    },
    {
      name: "年少有为",
      id: 1293886117,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 4292,
          name: "李荣浩",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 93,
      crbt: null,
      cf: "",
      al: {
        id: 73914415,
        name: "耳朵",
        picUrl:
          "https://p1.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg",
        tns: [],
        pic_str: "109951163606377163",
        pic: 109951163606377170
      },
      dt: 278989,
      h: {
        br: 320000,
        fid: 0,
        size: 11162689,
        vd: -25125
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6697631,
        vd: -22543
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4465102,
        vd: -20878
      },
      a: null,
      cd: "1",
      no: 7,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5965802,
      mst: 9,
      cp: 7002,
      rtype: 0,
      rurl: null,
      publishTime: 1531929600000
    },
    {
      name: "差不多姑娘",
      id: 1379444316,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 7763,
          name: "G.E.M.邓紫棋",
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 16,
      crbt: null,
      cf: "",
      al: {
        id: 84391762,
        name: "摩天动物园",
        picUrl:
          "https://p1.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg",
        tns: [],
        pic_str: "109951164581432409",
        pic: 109951164581432420
      },
      dt: 230042,
      h: {
        br: 320000,
        fid: 0,
        size: 9204550,
        vd: -28213
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5522747,
        vd: -25636
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3681846,
        vd: -24055
      },
      a: null,
      cd: "01",
      no: 8,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10880291,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416601,
      publishTime: 1563897600000
    }
  ],
  currentIndex: 0,
  sequence: 0, // 0:循环播放  1:随机播放  2:单曲循环
  lyricList: [], // 歌词
  currentLyricIndex: 0 // 当前歌词对应的Index
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SONG_DETAIL:
      return state.set("songDetail", action.songDetail);
    case CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case CHANGE_SONG_CURRENT_INDEX:
      return state.set("currentIndex", action.index);
    case CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action._index);
    default:
      return state;
  }
}

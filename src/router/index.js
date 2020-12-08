import React from "react";

import { Redirect } from "react-router-dom";

// 导入一级路由
import LQDiscover from "@/pages/discover";
import LQMy from "@/pages/my";
import LQFriends from "@/pages/friends";

// 导入二级路由
import LQRecommend from "@/pages/discover/child-pages/recommend";
import LQRanking from "@/pages/discover/child-pages/ranking";
import LQSongs from "@/pages/discover/child-pages/songs";
import LQDJradio from "@/pages/discover/child-pages/djradio";
import LQArtist from "@/pages/discover/child-pages/artist";
import LQAlbum from "@/pages/discover/child-pages/album";
import LQPlayer from "@/pages/player";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: "/discover",
    component: LQDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      { path: "/discover/recommend", component: LQRecommend },
      { path: "/discover/ranking", component: LQRanking },
      { path: "/discover/songs", component: LQSongs },
      { path: "/discover/djradio", component: LQDJradio },
      { path: "/discover/artist", component: LQArtist },
      { path: "/discover/album", component: LQAlbum },
      { path: "/discover/player", component: LQPlayer }
    ]
  },
  { path: "/my", component: LQMy },
  { path: "/friends", component: LQFriends }
];

export default routes;

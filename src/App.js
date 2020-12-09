import React, { memo, Suspense } from "react";

// 导入 provider 共享store
import { Provider } from "react-redux";
import store from "@/store";

import { HashRouter } from "react-router-dom";

import { renderRoutes } from "react-router-config";
import routes from "@/router";

import LQAppHeader from "@/components/app-header";
import LQAppFooter from "@/components/app-footer";

import GoToTop from "@/components/go-to-top";

import AppPlayerBar from "@/pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LQAppHeader />
        <Suspense fallback={<div>page Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <LQAppFooter />
        <AppPlayerBar />
      </HashRouter>
      <GoToTop />
    </Provider>
  );
});

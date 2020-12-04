import React, { memo } from "react";

// 导入 provider 共享store
import { Provider } from "react-redux";
import store from "@/store";

import { HashRouter } from "react-router-dom";

import { renderRoutes } from "react-router-config";
import routes from "@/router";

import LQAppHeader from "@/components/app-header";
import LQAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <LQAppHeader />
        {renderRoutes(routes)}
        <LQAppFooter />
      </HashRouter>
    </Provider>
  );
});

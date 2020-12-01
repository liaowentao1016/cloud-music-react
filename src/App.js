import React, { memo } from "react";

import { HashRouter } from "react-router-dom";

import { renderRoutes } from "react-router-config";
import routes from "@/router";

import LQAppHeader from "@/components/app-header";
import LQAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <LQAppHeader />
      {renderRoutes(routes)}
      <LQAppFooter />
    </HashRouter>
  );
});

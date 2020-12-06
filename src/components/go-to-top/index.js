import React, { memo, useEffect, useState } from "react";

import { GoToTopWrapper } from "./style";

export default memo(function GoToTop() {
  // hooks
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 100) {
        setisShow(true);
      } else {
        setisShow(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <GoToTopWrapper
      className="sprite"
      onClick={e => goToTop()}
      style={{ display: isShow ? "block" : "none" }}
    />
  );
});

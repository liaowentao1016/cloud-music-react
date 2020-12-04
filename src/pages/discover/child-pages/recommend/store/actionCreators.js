import { CHANGE_TOP_BANNERS } from "./constants";

import { getTopBanner } from "@/services/recommend";

const changeTopBannerAction = res => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

export const getToBannersAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      // 派发同步的action 用于保存请求的banners
      dispatch(changeTopBannerAction(res));
    });
  };
};

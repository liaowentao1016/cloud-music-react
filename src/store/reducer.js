import { combineReducers } from "redux-immutable";

// 导入Recommend的Reducer
import { reducer as recommendReducer } from "@/pages/discover/child-pages/recommend/store";

// 导入player的reducer
import { reducer as playerReducer } from "@/pages/player/store";

// 合并reducer
// 将combineReducers返回的对象 也用 immutable进行管理
const Reducers = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});

export default Reducers;

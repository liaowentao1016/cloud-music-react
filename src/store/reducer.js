import { combineReducers } from "redux-immutable";

// 导入Recommend的Reducer
import { reducer as recommendReducer } from "@/pages/discover/child-pages/recommend/store";

// 合并reducer
// 将combineReducers返回的对象 也用 immutable进行管理
const Reducers = combineReducers({
  recommend: recommendReducer
});

export default Reducers;

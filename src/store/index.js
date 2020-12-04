import { createStore, applyMiddleware, compose } from "redux";

// 导入合并的reducer
import reducer from "./reducer";

// 导入中间件
import thunk from "redux-thunk";

// 配置redux-dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store仓库
// createStore() 参数一：合并后的reducer  参数二:用于加强store(中间件)
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

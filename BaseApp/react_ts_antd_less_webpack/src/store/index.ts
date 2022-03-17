import { createStore, applyMiddleware } from "redux";
import { FINALREDUCER } from "./reducer";
import thunk from "redux-thunk";
const store = createStore(FINALREDUCER, applyMiddleware(thunk));
export default store;

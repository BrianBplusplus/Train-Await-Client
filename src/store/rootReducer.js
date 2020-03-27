import { combineReducers } from "redux";

import levels from "./levels/reducer";
import train from "./animation/reducer";

export default combineReducers({ levels, train });

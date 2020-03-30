import { combineReducers } from "redux";

import levels from "./levels/reducer";
import train from "./animation/reducer";
import score from "./score/reducer";

export default combineReducers({ levels, train, score });

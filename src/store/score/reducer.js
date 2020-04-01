import { INCREASE_SCORE } from "./action";
import { ROTATE_TILE } from "../levels/action";

const initialState = { score: 0, rotations: 0 };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_SCORE: {
      const actionScore = state.score + action.payload;
      const newScore = actionScore - state.rotations * 5;
      return { ...state, score: newScore, rotations: 0 };
    }

    case ROTATE_TILE: {
      const newRotationCount = state.rotations + 1;
      return { ...state, rotations: newRotationCount };
    }

    default:
      return state;
  }
};

import { INCREASE_SCORE, RETURN_TO_MAIN_MENU } from "./action";
import { ROTATE_TILE } from "../levels/action";

const initialState = { score: 0, rotations: 0 };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_SCORE: {
      const actionScore = state.score + action.payload;
      let newScore = actionScore - state.rotations * 5;

      if (newScore <= 0) {
        newScore = 10;
      }

      return { ...state, score: newScore, rotations: 0 };
    }

    case ROTATE_TILE: {
      const newRotationCount = state.rotations + 1;
      return { ...state, rotations: newRotationCount };
    }

    case RETURN_TO_MAIN_MENU: {
      return {
        score: 0,
        rotations: 0
      };
    }

    default:
      return state;
  }
};

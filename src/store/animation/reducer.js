import { MOVE_TRAIN_RIGHT } from "./action";

const initialState = { x: 135, y: 30 };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_TRAIN_RIGHT: {
      const newX = state.x + 100;
      return { ...state, x: newX };
    }

    default:
      return state;
  }
};

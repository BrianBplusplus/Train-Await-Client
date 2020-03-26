import { MOVE_TRAIN } from "./action";

const initialState = { x: 135, y: 30 };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_TRAIN: {
      const direction = action.payload;
      if (direction === "up") {
        const newY = state.y - 100;
        return { ...state, y: newY };
      }

      if (direction === "right") {
        const newX = state.x + 100;
        return { ...state, x: newX };
      }

      if (direction === "down") {
        const newY = state.y + 100;
        return { ...state, y: newY };
      }

      if (direction === "left") {
        const newX = state.x - 100;
        return { ...state, x: newX };
      }
    }
    default:
      return state;
  }
};

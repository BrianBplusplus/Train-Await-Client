import { MOVE_TRAIN, RESET_TRAIN } from "./action";
const screenWidthCenter = window.innerWidth / 2;
const tileAdjuster = 100;

const initialState = { x: screenWidthCenter - tileAdjuster, y: 110 };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_TRAIN: {
      const direction = action.payload;
      const movementCount = 80;
      if (direction === "up") {
        const newY = state.y - movementCount;
        return { ...state, y: newY };
      }
      if (direction === "right") {
        const newX = state.x + movementCount;
        return { ...state, x: newX };
      }
      if (direction === "down") {
        const newY = state.y + movementCount;
        return { ...state, y: newY };
      }
      if (direction === "left") {
        const newX = state.x - movementCount;
        return { ...state, x: newX };
      } else {
        break;
      }
    }

    case RESET_TRAIN: {
      const screenWidth = window.innerWidth / 2;
      const adjustXBasedOnScreenWidth = action.payload;
      return { x: screenWidth - adjustXBasedOnScreenWidth, y: 110 };
    }
    default:
      return state;
  }
};

import { START_LEVEL } from "./action";

const initialState = { currentLevel: 0, tiles: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_LEVEL: {
      return {
        ...state,
        currentLevel: +1,
        tiles: action.payload
      };
    }

    default:
      return state;
  }
};

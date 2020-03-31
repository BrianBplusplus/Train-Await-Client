import { INCREASE_SCORE } from "./action";

const initialState = 0;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_SCORE: {
      return (state += action.payload);
    }

    default:
      return state;
  }
};

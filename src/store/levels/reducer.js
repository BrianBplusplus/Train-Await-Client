import { START_LEVEL, ROTATE_TILE } from "./action";

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

    case ROTATE_TILE: {
      const { x, y, rotatedTile } = action.payload;
      const newState = {};
      newState.tiles = state.tiles.map((currentTile, index) => {
        if (index === x) {
          return currentTile.map((tegel, index) => {
            if (index === y) {
              console.log("reducer BEFORE", tegel.tileData);
              const newTegel = { ...tegel };
              newTegel.tileData = rotatedTile;
              console.log("reducer AFTER", newTegel.tileData);

              return newTegel;
            }
            return tegel;
          });
        }
        return currentTile;
      });
      return newState;
    }

    default:
      return state;
  }
};

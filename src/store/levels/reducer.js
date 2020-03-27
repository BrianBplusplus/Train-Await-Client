import { START_LEVEL, NEXT_LEVEL, ROTATE_TILE } from "./action";

const initialState = { currentLevel: 0, tiles: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_LEVEL: {
      const nextLevel = state.currentLevel + 1;

      return {
        ...state,
        currentLevel: nextLevel,
        tiles: action.payload
      };
    }

    case NEXT_LEVEL: {
      const nextLevel = state.currentLevel + 1;
      return {
        ...state,
        currentLevel: nextLevel
      };
    }

    case ROTATE_TILE: {
      const { x, y, rotatedTile, rotatedClass } = action.payload;
      const newState = { ...state };
      newState.tiles = state.tiles.map((currentTile, index) => {
        if (index === x) {
          return currentTile.map((tegel, index) => {
            if (index === y) {
              console.log("reducer BEFORE", tegel.tileData, tegel.class);
              const newTegel = { ...tegel };
              newTegel.tileData = rotatedTile;
              newTegel.class = rotatedClass;
              console.log("reducer AFTER", newTegel.tileData, newTegel.class);

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

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
      console.log("action.payload", action.payload);
      const newState = {};
      newState.tiles = state.tiles.map((currentTile, index) => {
        if (index === x) {
          return currentTile.map((tegel, index) => {
            if (index === y) {
              console.log("Tile", tegel);
              console.log("reducer.old", tegel.tileData);
              const newTegel = { ...tegel };
              newTegel.tileData = rotatedTile;
              console.log("reducer.new", newTegel.tileData);

              return newTegel; //action.payload.tile
            }
            return tegel;
          });
        }
        return currentTile;
      });

      console.log("new state", newState.tiles);

      //newState.levels.tiles = []; //state.levels.tiles.map(currentTile => currentTile);
      return newState;
    }

    default:
      return state;
  }
};

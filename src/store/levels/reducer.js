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
      const { x, y, tile } = action.payload;
      const newState = {};
      newState.tiles = state.tiles.map((t, i) => {
        if (i + 1 === y) {
          return t.map(tegel => {
            if (tegel.id === x) {
              console.log("old", tegel);

              const newTegel = { ...tegel };
              console.log("newTegel.tileData", newTegel);
              newTegel.tileData = tile;
              return newTegel; //action.payload.tile
            }
            return tegel;
          });
        }
        return t;
      });

      console.log("new state", newState);

      //newState.levels.tiles = []; //sstate.levels.tiles.map(t => t);
      return newState;
    }

    default:
      return state;
  }
};

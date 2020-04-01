import { START_LEVEL, NEXT_LEVEL, ROTATE_TILE } from "./action";

const initialState = { currentLevel: 0, rendered: false, tiles: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_LEVEL: {
      const nextLevel = state.currentLevel + 1;

      return {
        ...state,
        currentLevel: nextLevel,
        rendered: true,
        tiles: action.payload
      };
    }

    case NEXT_LEVEL: {
      return {
        ...state,
        rendered: false
      };
    }

    case ROTATE_TILE: {
      const { x, y, rotatedTile, rotatedDiv } = action.payload;
      const newState = { ...state };
      newState.tiles = state.tiles.map((currentTile, index) => {
        if (index === x) {
          return currentTile.map((tile, index) => {
            if (index === y) {
              console.log("reducer BEFORE", tile.tileData, tile.rotation);
              const newTile = { ...tile };
              newTile.tileData = rotatedTile;
              newTile.rotation = rotatedDiv;
              console.log("reducer AFTER", newTile.tileData, newTile.rotation);

              return newTile;
            }
            return tile;
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

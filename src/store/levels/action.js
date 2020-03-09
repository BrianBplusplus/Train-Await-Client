//Fetch all events action
export const START_LEVEL = "START_LEVEL";

const startLevelSuccess = tiles => ({
  type: START_LEVEL,
  payload: tiles
});

export const startLevel = level => async (dispatch, getState) => {
  try {
    const onlyProps = level.map(level => level.map(tile => tile.props));

    dispatch(startLevelSuccess(onlyProps));
  } catch (error) {
    console.error(error);
  }
};

export const ROTATE_TILE = "ROTATE_TILE";

const rotateTileSuccess = (tile, x, y) => ({
  type: ROTATE_TILE,
  payload: { tile, x, y }
});

export const rotateTile = (rotatedTile, x, y) => async (dispatch, getState) => {
  try {
    console.log("rotateTile action triggered on tile", x, y, "new tiledata is", rotatedTile);
    dispatch(rotateTileSuccess(rotatedTile, x, y));
  } catch (error) {
    console.error(error);
  }
};

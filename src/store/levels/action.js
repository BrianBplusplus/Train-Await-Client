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

export const NEXT_LEVEL = "NEXT_LEVEL";

const nextLevelSuccess = () => ({
  type: NEXT_LEVEL
});

export const nextLevel = () => async (dispatch, getState) => {
  try {
    dispatch(nextLevelSuccess());
  } catch (error) {
    console.error(error);
  }
};

export const ROTATE_TILE = "ROTATE_TILE";

const rotateTileSuccess = (rotatedTile, x, y, rotatedDiv) => ({
  type: ROTATE_TILE,
  payload: { rotatedTile, x, y, rotatedDiv }
});

export const rotateTile = (rotatedTile, x, y, rotatedDiv) => async (dispatch, getState) => {
  try {
    console.log("rotateTile action triggered on tile", x, y, "new tiledata is", rotatedTile, "new rotation is", rotatedDiv);
    dispatch(rotateTileSuccess(rotatedTile, x, y, rotatedDiv));
  } catch (error) {
    console.error(error);
  }
};

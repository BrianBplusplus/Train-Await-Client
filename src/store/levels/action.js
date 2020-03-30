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

const rotateTileSuccess = (rotatedTile, x, y, rotatedClass) => ({
  type: ROTATE_TILE,
  payload: { rotatedTile, x, y, rotatedClass }
});

export const rotateTile = (rotatedTile, x, y, rotatedClass) => async (dispatch, getState) => {
  try {
    console.log("rotateTile action triggered on tile", x, y, "new tiledata is", rotatedTile, "new class is", rotatedClass);
    dispatch(rotateTileSuccess(rotatedTile, x, y, rotatedClass));
  } catch (error) {
    console.error(error);
  }
};

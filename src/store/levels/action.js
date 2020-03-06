//Fetch all events action
export const START_LEVEL = "START_LEVEL";

const startLevelSuccess = tiles => ({
  type: START_LEVEL,
  payload: tiles
});

export const startLevel = level => async (dispatch, getState) => {
  try {
    console.log("Level payload", level);
    const onlyProps = level.map(level =>
      level.map(tile => tile.props.tileData)
    );
    console.log("onlyProps payload", onlyProps);

    dispatch(startLevelSuccess(onlyProps));
  } catch (error) {
    console.error(error);
  }
};

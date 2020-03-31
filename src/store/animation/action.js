export const MOVE_TRAIN = "MOVE_TRAIN";

const moveTrainSuccess = direction => ({
  type: MOVE_TRAIN,
  payload: direction
});

export const moveTrain = direction => async (dispatch, getState) => {
  try {
    dispatch(moveTrainSuccess(direction));
  } catch (error) {
    console.error(error);
  }
};

export const RESET_TRAIN = "RESET_TRAIN";

const resetTrainSuccess = adjustXBasedOnScreenWidth => ({
  type: RESET_TRAIN,
  payload: adjustXBasedOnScreenWidth
});

export const resetTrain = arrayLength => async (dispatch, getState) => {
  try {
    if (arrayLength === 3) {
      dispatch(resetTrainSuccess(100));
    }
    if (arrayLength === 4) {
      dispatch(resetTrainSuccess(140));
    }
  } catch (error) {
    console.error(error);
  }
};

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

const resetTrainSuccess = () => ({
  type: RESET_TRAIN
});

export const resetTrain = () => async (dispatch, getState) => {
  try {
    dispatch(resetTrainSuccess());
  } catch (error) {
    console.error(error);
  }
};

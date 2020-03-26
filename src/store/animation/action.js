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

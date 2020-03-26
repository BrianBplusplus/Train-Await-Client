export const MOVE_TRAIN_RIGHT = "MOVE_TRAIN_RIGHT";

const moveTrainRightSuccess = () => ({
  type: MOVE_TRAIN_RIGHT
});

export const moveTrainRight = () => async (dispatch, getState) => {
  try {
    dispatch(moveTrainRightSuccess());
  } catch (error) {
    console.error(error);
  }
};

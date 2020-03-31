export const INCREASE_SCORE = "INCREASE_SCORE";

const increaseScoreSuccess = score => ({
  type: INCREASE_SCORE,
  payload: score
});

export const increaseScore = steps => async (dispatch, getState) => {
  try {
    const calculation = 10 + Math.pow(1.5, steps);
    const score = Math.round(calculation);
    dispatch(increaseScoreSuccess(score));
  } catch (error) {
    console.error(error);
  }
};

export const INCREASE_SCORE = "INCREASE_SCORE";

const increaseScoreSuccess = score => ({
  type: INCREASE_SCORE,
  payload: score
});

export const increaseScore = steps => async (dispatch, getState) => {
  try {
    const calculation = 50 + Math.pow(1.5, steps);
    const score = Math.round(calculation);
    dispatch(increaseScoreSuccess(score));
  } catch (error) {
    console.error(error);
  }
};

export const RETURN_TO_MAIN_MENU = "RETURN_TO_MAIN_MENU";

const returnToMainMenuSuccess = () => ({
  type: RETURN_TO_MAIN_MENU
});

export const returnToMainMenu = () => async (dispatch, getState) => {
  try {
    dispatch(returnToMainMenuSuccess());
  } catch (error) {
    console.error(error);
  }
};

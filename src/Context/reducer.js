import { actions } from "./actionData";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_MESSAGES:
      return { ...state, selectedData: action.payload };

    default:
      return state;
  }
};

import { CORRECT, INCORRECT, LANGUAGE } from "./Type";

const initialState = {
  list: {},
  correct: [],
  incorrect: [],
};
type Action = {
  type: string;
  payload: any;
};

const QuizReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        list: action.payload,
      };

    case CORRECT:
      return {
        ...state,
        correct: state.correct.concat(action.payload),
      };
    case INCORRECT:
      return {
        ...state,
        incorrect: state.incorrect.concat(action.payload),
      };
    default:
      return state;
  }
};
export default QuizReducer;

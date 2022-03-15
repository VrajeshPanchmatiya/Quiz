import { CORRECT, INCORRECT, LANGUAGE } from "./Type";

export const language = (data: any) => {
  return {
    type: LANGUAGE,
    payload: data,
  };
};

export const checkCorrect = (info: any) => {
  return {
    type: CORRECT,
    payload: info,
  };
};
export const checkIncorrect = (info: any) => {
  return {
    type: INCORRECT,
    payload: info,
  };
};

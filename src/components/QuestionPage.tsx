import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkCorrect, checkIncorrect } from "../redux/QuizAction";
const QuestionPage = () => {
  const [questionText, setQuestionText] = useState("");
  const [optionText, setOptionText] = useState([]);
  const [answer, setAnswer] = useState({} as any);
  const [checked, setChecked] = useState([] as any);
  const [quesId, setQuesId] = useState(0);
  const dispatch = useDispatch();
  type stateType = {
    selected: any;
    list: any;
  };
  const response = useSelector((state: stateType) => {
    return state.list;
  });
  const navigate = useNavigate();

  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer({ ...answer, [quesId]: e.target.value });
  };
  const handleChangeBox = (e: any) => {
    let newArray = [...checked, e.target.value];
    if (checked.includes(e.target.value)) {
      newArray = newArray.filter((value) => value !== e.target.value);
    }
    setChecked(newArray);
  };
  useEffect(() => {
    setQuestionText(response.Questions[quesId].questionText);
    setOptionText(response.Questions[quesId]?.Options_);
  }, [quesId]);
  const checkAnswer = () => {
    if (answer[0] === response.Questions[0].answerText) {
      dispatch(checkCorrect("correct"));
    } else {
      dispatch(checkIncorrect("incorrect"));
    }
    if (answer[1] === response.Questions[1].answerText) {
      dispatch(checkCorrect("correct"));
    } else {
      dispatch(checkIncorrect("incorrect"));
    }

    if (answer[2] === response.Questions[2].answerText) {
      dispatch(checkCorrect("correct"));
    } else {
      dispatch(checkIncorrect("incorrect"));
    }

    if (answer[3] === response.Questions[3].answerText) {
      dispatch(checkCorrect("correct"));
    } else {
      dispatch(checkIncorrect("incorrect"));
    }
    if (
      JSON.stringify(checked) ===
      JSON.stringify(response.Questions[4].answerText)
    ) {
      dispatch(checkCorrect("correct"));
    } else {
      dispatch(checkIncorrect("incorrect"));
    }
    navigate("/piechart");
  };
  console.log(checked);
  return (
    <Box>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => setQuesId(0)}
          style={{
            backgroundColor: Object.prototype.hasOwnProperty.call(answer, "0")
              ? "red"
              : "grey",
            margin: "2%",
          }}
        >
          1
        </Button>
        <Button
          variant="contained"
          onClick={() => setQuesId(1)}
          style={{
            backgroundColor: Object.prototype.hasOwnProperty.call(answer, "1")
              ? "red"
              : "grey",
            margin: "2%",
          }}
        >
          2
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: Object.prototype.hasOwnProperty.call(answer, "2")
              ? "red"
              : "grey",
            margin: "2%",
          }}
          onClick={() => setQuesId(2)}
        >
          3
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: Object.prototype.hasOwnProperty.call(answer, "3")
              ? "red"
              : "grey",
            margin: "2%",
          }}
          onClick={() => setQuesId(3)}
        >
          4
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: checked.length > 0 ? "red" : "grey",
            margin: "2%",
          }}
          onClick={() => setQuesId(4)}
        >
          5
        </Button>
      </Grid>
      <Grid item>
        <Box>
          <Typography>{questionText}</Typography>

          {quesId === 4 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                // width: "100%",
                // height: "100%",
              }}
            >
              <FormGroup>
                {optionText.map((option) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChangeBox}
                          value={option}
                          name={option}
                        />
                      }
                      label={option}
                    />
                  );
                })}
              </FormGroup>
              <Button variant="contained" onClick={checkAnswer}>
                Submit
              </Button>
            </div>
          ) : (
            <FormControl>
              {optionText.map((option) => {
                return (
                  <div key={option}>
                    <RadioGroup
                      value={answer[quesId] ? answer[quesId] : ""}
                      onChange={handleChangeOption}
                    >
                      <FormControlLabel
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    </RadioGroup>
                  </div>
                );
              })}
            </FormControl>
          )}
        </Box>
      </Grid>
    </Box>
  );
};
export default QuestionPage;

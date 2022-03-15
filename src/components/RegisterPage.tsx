import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import questionList from "./../Question.json";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [languge, setLanguage] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleChangeLanguage = (e: any) => {
    setValue(e.target.value);
  };
  useEffect(() => {}, [value]);
  const handleSubmitBtn = () => {
    navigate("/questions");
    if (value === "English") {
      const res = questionList.data.find((question) => question.id === 1);
      console.log(res);
      dispatch({ type: "LANGUAGE", payload: res });
    }
    if (value === "Hindi") {
      const res = questionList.data.find((question) => question.id === 2);
      console.log(res);
      dispatch({ type: "LANGUAGE", payload: res });
    }
  };

  return (
    <div>
      <h1>Detail Form</h1>
      <Grid item>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <TextField
            data-testid="NameInput"
            placeholder="Enter Your Name"
            onChange={handleName}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>Gender:</FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="male" />
            <FormControlLabel value="Other" control={<Radio />} label="other" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>Language :</FormLabel>
          <RadioGroup value={value} onChange={handleChangeLanguage}>
            <FormControlLabel
              value="English"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="Hindi"
              onChange={handleChangeLanguage}
              control={<Radio />}
              label="Hindi"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <Button
            onClick={handleSubmitBtn}
            disabled={!value}
            variant="contained"
            data-testid="btn"
          >
            Start Test
          </Button>
        </FormControl>
      </Grid>
    </div>
  );
};
export default RegisterPage;

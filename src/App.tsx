import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import RegisterPage from "./components/RegisterPage";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import QuestionPage from "./components/QuestionPage";
import PieChrt from "./components/PieChart";
import QuizReducer from "./redux/QuizReducer";
const store = createStore(QuizReducer, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/piechart" element={<PieChrt />} />
        </Routes>
      </Provider>
      {/* <Provider></Provider> */}
    </div>
  );
}

export default App;

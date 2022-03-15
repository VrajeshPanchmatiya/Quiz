import React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";
const PieChrt = () => {
  const correctData = useSelector((state: any) => {
    return state.correct;
  });
  const inCorrectData = useSelector((state: any) => {
    return state.incorrect;
  });
  return (
    <div>
      <h1>PieChart</h1>
      <PieChart
        radius={20}
        paddingAngle={10}
        labelStyle={{
          fontSize: "2px",
          fill: "#000",
        }}
        label={(props) => {
          return props.dataEntry.value !== 0
            ? `${props.dataEntry.title} ${Math.round(
                props.dataEntry.percentage
              )}%`
            : null;
        }}
        labelPosition={30}
        lineWidth={20}
        data={[
          {
            color: "#E38627",
            title: "Correct",
            //   title: correctData.length > 0 ? "Correct" : "",
            value: correctData.length,
          },
          {
            color: "#C13C37",
            title: "Incorrect",
            //   title: inCorrectData.length > 0 ? "Incorrect" : "",
            value: inCorrectData.length,
          },
        ]}
      />
    </div>
  );
};
export default PieChrt;

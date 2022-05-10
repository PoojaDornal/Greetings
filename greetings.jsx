import React from "react";

function Greetings() {
  let curTime = new Date();
  curTime = curTime.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curTime >= 1 && curTime < 12) {
    greeting = "Good Morning!";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime < 19) {
    greeting = "Good Afternoon!";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night!";
    cssStyle.color = "black";
  }

  return (
    <>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>{" "}
      </h1>
    </>
  );
}
export default Greetings;

import React from "react";

const ChildCompo = (props) => {
  return (
    <div style={{ marginTop: "1rem", background: "blue", color: "white" }}>
      {props.name}
    </div>
  );
};

export default ChildCompo;

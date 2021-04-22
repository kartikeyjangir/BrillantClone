import React from "react";
import data from "../data";
import Card from "./Card";

function LogicMachine(props) {
  const { item } = props;
  return (
    <div className="container">
      <div className="row2">
        <div className="itemno">{item}</div>
        <div className="titlediv">
          <h3>Logic Machines</h3>
          <p style={{ fontWeight: "normal" }}>
            Turn logic into arithmetic machines.
          </p>
        </div>
      </div>

      <div className="row2 wrapper" style={{ marginTop: "3rem" }}>
        {data.logicmachine.map((item) => (
          <Card key={item.id_} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LogicMachine;

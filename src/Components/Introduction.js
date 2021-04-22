import React from "react";
import data from "../data";
import Card from "./Card";

function Introduction(props) {
  return (
    <div className="container">
      <div className="row2">
        <div className="itemno">{props.item}</div>
        <div className="titlediv">
          <h3>Introduction</h3>
          <p style={{ fontWeight: "normal" }}>
            Put your logic to the test with these warmups!
          </p>
        </div>
      </div>

      <div className="row2" style={{marginTop:"3rem"}}>
        {data.introduction.map((item) => (
          <Card key={item.id_} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Introduction;

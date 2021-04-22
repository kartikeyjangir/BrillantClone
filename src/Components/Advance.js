import React from 'react'
import data from "../data";
import Card from "./Card";

function Advance(props) {
    const {item}=props;
    return (
        <div className="container">
        <div className="row2">
          <div className="itemno">{item}</div>
          <div className="titlediv">
            <h3>Advanced Knights and Knaves</h3>
            <p style={{ fontWeight: "normal" }}>
            Uncover liars on this island of logic!
            </p>
          </div>
        </div>
  
        <div className="row2 wrapper" style={{marginTop:"3rem"}}>
          {data.advanceknigth.map((item) => (
            <Card key={item.id_} item={item} />
          ))}
        </div>
      </div>
    )
}

export default Advance

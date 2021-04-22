import React from 'react'
import data from "../data";
import Card from "./Card";

function Rational(props) {
    const {item}=props;
    return (
        <div className="container">
        <div className="row2">
          <div className="itemno">{item}</div>
          <div className="titlediv">
            <h3>The Rational Detective</h3>
            <p style={{ fontWeight: "normal" }}>
            Eliminate the impossible and uncover the truth!
            </p>
          </div>
        </div>
  
        <div className="row2 wrapper" style={{marginTop:"3rem"}}>
          {data.rationaldetective.map((item) => (
            <Card key={item.id_} item={item} />
          ))}
        </div>
      </div>
    )
}

export default Rational

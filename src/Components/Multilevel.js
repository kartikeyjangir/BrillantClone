import React from 'react'
import data from "../data";
import Card from "./Card";

function Multilevel(props) {
    const {item}=props;
    return (
        <div className="container">
        <div className="row2">
          <div className="itemno">{item}</div>
          <div className="titlediv">
            <h3>Multi-Level Thinking</h3>
            <p style={{ fontWeight: "normal" }}>
            If you know that I know that you know... what then?
            </p>
          </div>
        </div>
  
        <div className="row2 wrapper" style={{marginTop:"3rem"}}>
          {data.multileveltasking.map((item) => (
            <Card key={item.id_} item={item} />
          ))}
        </div>
      </div>
    )
}

export default Multilevel

import React from 'react'
import data from "../data";
import Card from "./Card";

function PuzzleRideles(props) {
    const {item}=props;
    return (
        <div className="container">
        <div className="row2">
          <div className="itemno">{item}</div>
          <div className="titlediv">
            <h3>Puzzles and Riddles</h3>
            <p style={{ fontWeight: "normal" }}>
            Even trickier puzzles and the tools you need to solve them.
            </p>
          </div>
        </div>
  
        <div className="row2 wrapper" style={{marginTop:"3rem"}}>
          {data.puzzlesriddles.map((item) => (
            <Card key={item.id_} item={item} />
          ))}
        </div>
      </div>
    )
}

export default PuzzleRideles

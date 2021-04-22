import React from "react";
import data from "../data";
import Card from "./Card";

function CompetitveGames(props) {
  const { item } = props;
  return (
    <div className="container">
      <div className="row2">
        <div className="itemno">{item}</div>
        <div className="titlediv">
          <h3>Competitive Games</h3>
          <p style={{ fontWeight: "normal" }}>
            What will your opponent do? Logic it out!
          </p>
        </div>
      </div>

      <div className="row2 wrapper" style={{ marginTop: "3rem" }}>
        {data.competitivegame.map((item) => (
          <Card key={item.id_} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CompetitveGames;

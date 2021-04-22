import React from "react";

function Card(props) {
  const { item } = props;
  return (
    <div key={item.id_} className="card">
      <img src={item.img} alt={item.heading}/>

      <div className="text">
        <h2>{item.heading}</h2>
        <p>{item.description}</p>
      </div>

      <div className="line">
      {/* <hr/> */}
      </div>
    </div>
  );
}

export default Card;

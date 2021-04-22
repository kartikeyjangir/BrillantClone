import React from "react";

function Prob4() {
  return (
    <div>
      <p className="probp">Arrange the cards to make the following true:</p>
      <ul>
        <li> <p className="probp">The king is in one of the two middle spaces.</p></li>
        <li> <p className="probp">The queen is left of the jack and right of the ace.</p></li>
        <li> <p className="probp">The ace is directly next to the queen.</p></li>

      </ul>
      <p className="probp">(Note: Left and right are from the player's perspective).</p>

      <p className="probp">Drag the characters into the dotted boxes.</p>
      <p className="probp"></p>

      <div className="row" style={{width:"70rem" ,height:"30rem"}}>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>


            </div>


            <div className="row probimag4">
                <div draggable="true" >
                    <h3>Ace</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/d0bJPuBGB9-black-ace.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>King</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/PZCNroQ2XB-black-king.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Queen</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Y43G7ol9AD-black-queen.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Jack</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/rcij15XKXP-black-jack.png" alt="" />
                </div>
                


            </div>

      <div className="buttonprop row">
                <button style={{background:"white",color:"black"}}>Show Explanation</button>
                <button style={{background:"black",color:"white"}} disabled>Check answer</button>
            </div>

    </div>
  );
}

export default Prob4;

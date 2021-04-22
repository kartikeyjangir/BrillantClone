import React from 'react'

function Prob1() {

    
    return (
        <div className="probs">
            <p className="probp">Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
            <ul>
                <li><p className="probp">Joseph is not the youngest</p></li>
                <li><p className="probp">Kevin is the oldest.</p></li>
                <li><p className="probp">Nicholas is not the oldest.</p></li>

            </ul>
            <p className="probp">Drag the characters into the dotted boxes.</p>

            <div className="row">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>

            </div>

            <div className="row probimag">
                <div draggable="true" >
                    <h3>Joseph</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Kevin</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Nicolas</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png" alt="" />
                </div>


            </div>

            <div className="buttonprop row">
                <button style={{background:"white",color:"black"}}>Show Explanation</button>
                <button style={{background:"black",color:"white"}} disabled>Check answer</button>
            </div>
        </div>
    )
}

export default Prob1

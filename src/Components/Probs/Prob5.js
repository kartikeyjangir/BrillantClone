import React from "react";

function Prob5() {
  return (
    <div>
      <p className="probp">Five friends competed in a race.</p>
      <div style={{ background: "#f0f0f0" ,padding:"4rem"  ,border:"1px solid gray"}}>
        <ul>
          <li>
            <p className="probp">Pyrrha finished faster than Blake.</p>
          </li>
          <li>
            <p className="probp">
              The <b>smallest </b>difference in finishing times was between
              Pyrrha and Ruby.
            </p>
          </li>
          <li>
            <p className="probp">
              The <b>largest</b> difference in finishing times was between Ruby
              and Weiss.
            </p>
          </li>
          <li>
            <p className="probp">Yang finished either </p>
          </li>
        </ul>
      </div>
      <p className="probp" style={{marginTop:"3rem"}}>Drag the characters into the dotted boxes.</p>

      <div className="row" style={{width:"70rem" ,height:"30rem"}}>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
            </div>


            <div className="row probimag5">
                <div draggable="true" >
                    <h3>Blake</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Qbk64lDKVy-runner-11.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Pyrrha</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/LGyRi7z1Ze-runner-21.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Ruby</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/odaceGNNt0-runner-31.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Welss</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/HC30gn3BdV-runner-4-1.png" alt="" />
                </div>
                <div draggable="true" >
                    <h3>Yang</h3>
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Q6Q6wE9Sqw-runner-52.png" alt="" />
                </div>


            </div>

    </div>
  );
}

export default Prob5;

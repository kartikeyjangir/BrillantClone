import React from "react";

function Prob6() {
  return (
    <div>
      <div
        style={{
          background: "#f0f0f0",
          padding: "4rem",
          border: "1px solid gray",
        }}
      >
        <ol>
          <li>
            <p className="probp">
              There is exactly 11 false statement in this list.
            </p>
          </li>
          <li>
            <p className="probp">
              There are exactly 22 false statements in this list.
            </p>
          </li>
          <li>
            <p className="probp">
              There are exactly 33 false statements in this list.
            </p>
          </li>
        </ol>
      </div>
      <p className="probp" style={{marginTop:"3rem"}}>
        How many <b>false</b> statements are there in the list above?
      </p>
    </div>
  );
}

export default Prob6;

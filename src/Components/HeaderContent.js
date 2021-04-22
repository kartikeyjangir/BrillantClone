import React from "react";

function HeaderContent() {
  return (
    <div className="HeaderContent">
      <p>
        <a href="/"> &#60; Back to all courses</a>
      </p>
      <div className="row ">
        <div>
          <h1>Logic</h1>
          <h2>
            Stretch your analytic muscles with knights, knaves, logic <br />
            gates, and more!
          </h2>
          <p>
            The beginning of our introductory math journey is Logic. Through
            these challenging problem solving exercises, you'll construct the
            critical thinking skills that are the basis for mathematical
            reasoning.
          </p>
          <p>
            You'll use limited information to make predictions – eliminating the
            impossible to uncover the truth. This course builds up to some truly
            mind-bending challenges!
            <br />
            <a href="/" style={{ textDecoration: "underline" }}>
              {" "}
              Read more
            </a>
          </p>

          <p>
            <a href="/" style={{ textDecoration: "underline" }}>
              View prerequisites and next steps
            </a>
          </p>
        </div>
        <img src="../images/headercontent.png" alt="header"></img>
      </div>
    </div>
  );
}

export default HeaderContent;

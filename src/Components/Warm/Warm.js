import React, { useState } from "react";
import { NavLink ,Link} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Prob1 from "../Probs/Prob1";
import Prob2 from "../Probs/Prob2";
import Prob3 from "../Probs/Prob3";
import Prob4 from "../Probs/Prob4";
import Prob5 from "../Probs/Prob5";
import Prob6 from "../Probs/Prob6";

function Warm() {
  const [currprob, setCurrprob] = useState(1);

  const prevprob = () => {
    setCurrprob(currprob > 1 ? currprob - 1 : 1);
    console.log(currprob);
  };

  const nextprob = () => {
    setCurrprob(currprob < 6 ? currprob + 1 : 6);
    console.log(currprob);

  };

  return (
    <div className="row warmcontent">
      <div className="leftbar">
        <Link to="/"> &#60; Back </Link>
        <Link to="#">Logic</Link>
      </div>
      <div className="mainsection">
        <Switch>
          <Route path="/warm" exact component={Prob1}/>
          <Route path="/warm/p1" component={Prob1} />
          <Route path="/warm/p2" exact component={Prob2} />
          <Route path="/warm/p3" exact component={Prob3} />
          <Route path="/warm/p4" exact component={Prob4} />
          <Route path="/warm/p5" exact component={Prob5} />
          <Route path="/warm/p6" exact component={Prob6} />
        </Switch>
      </div>
      <div className="rightbar">
        <div className="lesson">
          <h5>Lesson 1</h5>
        </div>
        <h2>WARMUP PUZZLES</h2>
        <div className="proppicker row">
          <div
            style={{ cursor: "pointer", marginRight: "2rem", fontSize: "3rem" }}
            onClick={prevprob}
          >
            &#60;
          </div>
          <NavLink activeClassName="active_class" to="/warm/p1" className="prop_marker" >
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <NavLink activeClassName="active_class" to="/warm/p2" className="prop_marker">
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <NavLink activeClassName="active_class"
            to="/warm/p3"
            className="prop_marker third"
            
          >
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <NavLink activeClassName="active_class" to="/warm/p4" className="prop_marker">
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <NavLink activeClassName="active_class" to="/warm/p5" className="prop_marker">
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <NavLink activeClassName="active_class"
            to="/warm/p6"
            className="prop_marker third"
            
          >
            {" "}
            &nbsp; &nbsp;
          </NavLink>
          <div
            style={{
              cursor: "pointer",
              marginLeft: "2rem",
              fontSize: "3rem",
            }}
            onClick={nextprob}
          >
            &#62;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warm;

import React from 'react'
import HeaderContent from "./HeaderContent";
import Introduction from "./Introduction";
import LogicMachine from "./LogicMachine";
import Multilevel from "./Multilevel";
import PuzzleRideles from "./PuzzleRideles";
import Rational from "./Rational";
import Advance from "./Advance";
import CompetitveGames from "./CompetitveGames";

function Home() {
    return (
        <div>
            <HeaderContent />
          <Introduction item="1" />
          <Rational item="2" />
          <PuzzleRideles item="3" />
          <Multilevel item="4" />
          <CompetitveGames item="5" />
          <LogicMachine item="6" />
          <Advance item="7" />

          <div className=" centerme">
              <p>NEXT STEPS</p>
              <div className="row content">
                  <div className="row">
                      <img src="/images/mainpage1.png" alt="mainpage"></img>
                      <div><h2>Mathmatical Fundamentals</h2>
                      <p>The essentila Tools for mastering the algebra,logic and number theory !</p>
                      </div>
                  </div>
                  <div className="row">
                      <img src="/images/mainpage2.png" alt="mainpage"></img>
                      <div><h2>Computer Science Fundamentals</h2>
                      <p>Wrap your mind around computitional thinking from everyday tasks to algorithms.</p>
                      </div>
                  </div>
                  <div className="row"></div>

              </div>
          </div>
        </div>
    )
}

export default Home

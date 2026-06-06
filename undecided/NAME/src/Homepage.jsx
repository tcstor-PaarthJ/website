import "react";
import "./Homepage.css";
import globe from "./globe.png";
import Nav from "./components/nav.jsx";
function Homepage() {
  return (
    <>
      <div id="header">
        <div id="title">
          <h1 className="top">Paarth Joshi</h1>
          <div className="top" id="text">
            {" "}
            Rising coder and innovator
          </div>
        </div>

        <Nav />
      </div>
      <div id="title-wrapper">
        <h2>Projects</h2>
      </div>
      <div id="cardholder">
        <div className="card tinted-glass">
          <h3>Tic Tac Toe</h3>
          <p>
            A game is played in which two players take turns drawing three O's
            or three X's in a row, column or diagonal in nine coordinate spaces.
          </p>
        </div>
        <div className="card tinted-glass">
          <h3>Flappy Bird</h3>
          <p>
            A game where you have to click the screen in order to help a bird
            survive past certain obstacles by going through an opening.
          </p>
        </div>
        <div className="card tinted-glass">
          <h3>Stock Simulator</h3>
          <p>
            A game where you can learn the basics about investing and simulate
            the real stock market, with different stocks, bonds, and mutual
            funds.
          </p>
        </div>
      </div>
      <div>
        <h2>About me</h2>
      </div>
      <div className="card tinted-glass" id="aboutme">
        I was a part of the Madrona Math Field Day Team for 3 years. We have won
        2nd place in 7th grade, where I then advanced to the county level
        competition and won first overall. In 8th grade, we won 3rd place and I
        advanced to the county level, and we got 2 medals, silver in Problem
        Solving and bronze in Conceptual Understanding. I play tennis and am
        ready to compete in a USTA tournament coming up. I have been playing for
        about a year and a half now and I have made significant improvement in
        my game.
      </div>
      <div>
        <h2>Work with me</h2>
      </div>

      <div className="card tinted-glass" id="workwithme">
        <p>Here are my socials</p>
      </div>
      {/*  FIGMA */}
      <script src="script.js"></script>
    </>
  );
}
export default Homepage;

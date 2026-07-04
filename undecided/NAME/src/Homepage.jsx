import "react";
import "./Homepage.css";
import globe from "./globe.png";
import Nav from "./components/Nav.jsx";
import "./animations.css"
function Homepage() {
  return (
    <div className="homepage">
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
        <div className="project-card card holographic-card tinted-glass">
          <h3>Tic Tac Toe</h3>
          <p>
            A game is played in which two players take turns drawing three O's
            or three X's in a row, column or diagonal in nine coordinate spaces.
          </p>
        </div>
        <div className="project-card holographic-card card tinted-glass">
          <h3>Flappy Bird</h3>
          <p>
            A game where you have to click the screen in order to help a bird
            survive past certain obstacles by going through an opening.
          </p>
        </div>
        <div className="project-card card holographic-card tinted-glass">
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

      <div className="tinted-glass" id="aboutme">
        <p>
          I am a rising junior at Torrance High School and I want to pursue a
          career in STEM. I am a co-founder of the Robotics Club at our school,
          and we are aiming to compete in VEX Robotics VRC competitions this
          upcoming year. I have competed in various math competitions over
          middle school and high school, and I have competed in the LACOE Math
          Field Day for 4 years, in which I have got 2 bronze medals as a
          freshman and 2 silver medals as a sophomore. I recently started doing
          science olympiad, and we are aiming to go to invitational competions
          in the winter/spring. I am playing tennis for my school as well, and I
          made varisty my sophomore year. I have become the junior captain of
          the tennis team and am excited to meet new people.
        </p>
      </div>

      {/*  FIGMA */}
      <script src="script.js"></script>
    </div>
  );
}
export default Homepage;

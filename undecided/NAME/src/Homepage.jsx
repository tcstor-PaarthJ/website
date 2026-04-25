import "react";
import "./Homepage.css";
import globe from "./globe.png";

function Homepage() {
  return (
    <>
   
      <div></div>
      <div id="header">
        <h1 className="top">Paarth Joshi</h1>
        <div className="top" id="text">
          <div>
            {" "}
            I am learning piano and have started practicing for a couple months.
            I play tennis and am ready to compete in a USTA tournament coming
            up. I have been playing for about a year and a half now and I have
            made significant improvement in my game.
          </div>
        </div>
      </div>

      <div id="globediv">
        <img id="globe" src={globe} />

        <br />
      </div>

      <h2 id="h2p">Projects</h2>
      <div id="project">
        <div id="tictactoe1">
          <h3 className="project">Tic Tac Toe</h3>
          <div className="project">
            A game is completed in which two players take turns seeking to draw
            three O's or three X's in a row, column or diagonal in nine
            coordinate spaces.
          </div>
          <h3 className="project">Flappy Bird</h3>
          <div className="project">
            A game where you have to click the screem in order to help a bird
            survive past certain obstacles by going through an opening.{" "}
          </div>
        </div>
      </div>
      {/* I was a part of the Madrona Math Field Day Team for 3 years. We have won 2nd place in 7th      
  grade, where I then advanced to the county level competition and won first overall. 
  In 8th grade, we won 3rd place and I advanced to the county level, and we got 2 medals, silver in Problem Solving and bronze in Conceptual Understanding. 
  I am learning piano and have started practicing for a couple months. I play tennis and am ready to compete in a USTA tournament coming up. 
  I have been playing for about a year and a half now and I have made significant improvement in my game. FIGMA */}
      <script src="script.js"></script>
    </>
  );
}
export default Homepage;

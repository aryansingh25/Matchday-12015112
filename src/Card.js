import flag from "./Flag_of_India.svg";
import verses from "./logo_white.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ match }) => {

  let navigate = useNavigate();
  const routeChange = (e) => {
    let path = e;
    navigate(path);
  };

  const handle = () => {
    routeChange('/parttwo')
  };

  const { a1, a2, a3, b1, b2, b3 } = match;
  return (
    <>
      <div className="match" onClick={handle}>
        <div className="tournament">
          <h2>{match.tournament[0].name}</h2>
          <h3>{match.round}</h3>
        </div>
        <div className="players">
          <div className="player one">
            <div
              id="one"
              className="crown"
            >
            </div>
            <div className="flag">
              <img src={flag} alt="" />
            </div>
            <h3>{(match.team1[0].name)}</h3>
          </div>
          <div className="verses">
            <div className="scorecard">
              <h3>v/s</h3>
              <div className="scores">
                {a1}-{b1} , {a2}-{b2} , {a3}-{b3}
              </div>
            </div>
            <img src={verses} alt="" />
          </div>
          <div className="player two">
            <div
              id="one"
              className="crown"
            >
            </div>
            <div className="flag">
              <img src={flag} alt="" />
            </div>
            <h3>{(match.team2[0].name)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./Auth";
import { useNavigate } from "react-router-dom";
import balloon from "./party-balloon-icon.png";
import p from "./popped.png";

const Game = () => {
  const { isAuthenticated, name } = useContext(AuthContext);
  const [balloonSize, setBalloonSize] = useState(0);
  const [popped, setPopped] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (balloonSize >= 10) {
      setPopped(true);
    }
  }, [balloonSize]);

  const pumpBalloon = () => {
    if (!popped) {
      setBalloonSize((prevSize) => prevSize + 1);
    }
  };

  const resetGame = () => {
    setBalloonSize(0);
    setPopped(false);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-300 justify-center items-center gap-5">
      <div className="font-thin text-4xl ">Hello {name}!</div>
      <div className="text-4xl md:text-7xl font-serif font-semibold text-blue-600">
        Let's Play a Game
      </div>

      {popped ? (
        <>
          <img src={p} alt="popped" style={{ width: "10%" }} />
          <div className="text-3xl font-medium text-red-700">
            {" "}
            Balloon popped!{" "}
          </div>
          <button
            id="button"
            onClick={resetGame}
            className="bg-red-200 p-4 rounded-2xl hover:scale-110 font-semibold text-2xl"
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <img
            src={balloon}
            alt="balloon"
            style={{
              width: ` ${balloonSize}%`,
              display: "block",
            }}
          />
          <div>
            <button
              id="button"
              onClick={pumpBalloon}
              className="bg-red-200 p-4 rounded-2xl hover:scale-110 font-semibold text-2xl"
            >
              Pump Balloon
            </button>
          </div>
          <div>Pump the balloon upto the point it popped!!!</div>
        </>
      )}
    </div>
  );
};

export default Game;

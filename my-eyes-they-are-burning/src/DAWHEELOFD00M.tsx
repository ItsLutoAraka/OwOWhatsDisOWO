import { useEffect, useState } from "react";
import "./DAWHEELOFD00M.css";
const SECOND = 1000;
const audio = new Audio("public/airhorn.mp3");

function ULOSE() {
  return (
    // <div style={{
    //     position: 'absolute',
    //     zIndex: 1000000000000000,
    //     backgroundColor:'red',
    //     width: '400px',
    //     }}>
    //     <div>U R A LOSERF</div>
    //     <div> L + RATIO</div>
    //     <div> YOUR</div>
    //     <div> MUM</div>
    // </div>
    <img
      src="USUCK.png"
      style={{
        position: "fixed",
        background: "orange",
        height: "300px",
        width: "500px",
        zIndex: 1000000000000000,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%",
      }}
      // className='flash-and-spin'
    />
  );
}

function DAWHEELOFD00M() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [cookieCount, setCookieCount] = useState(0);
  const [hornInterval, setHornInterval] = useState(5.5 * SECOND);
  const [volume, setVolume] = useState(0.001);
  const [startCountdown, setStartCountdown] = useState(false);
  const [countdown, setCountdown] = useState(20 * SECOND);
  const [totalRotation, setTotalRotation] = useState(0);
  const [AREYAWINNINGSON, setAREYAWINNINGSON] = useState(false);
  const [showLoseMsg, setShowLoseMsg] = useState(false);

  // audio.volume = volume;

  // setInterval(() => {
  //     audio.play();
  // }, hornInterval);

  const rng = () => {
    const num = Math.floor(Math.random() * 7);
    return num;
  };

  const handleOnclick = () => {
    setIsSpinning(true);
    setShowLoseMsg(false);

    const isWin = Math.floor(Math.random() * 2000) === 5;
    setAREYAWINNINGSON(isWin);
    console.log("ARE YA WINNING SON?", isWin);
    const minSpin = 3;
    let randomExtraSpin;

    if (isWin) {
      //winner
      randomExtraSpin = 175 - (Math.floor(minSpin * SECOND) % 360);
    }
    //LOSER LOSER NO CHUICKECN
    else {
      randomExtraSpin = Math.floor(Math.random() * 360);

      while (randomExtraSpin >= 170 && randomExtraSpin <= 180) {
        randomExtraSpin = Math.floor(Math.random() * 360);
      }
    }

    const newRotation = minSpin * SECOND + randomExtraSpin;

    setTotalRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setShowLoseMsg(!isWin);
    }, minSpin * SECOND + randomExtraSpin);
  };

  const handleButtonClick = () => {
    if (hornInterval > 10 && countdown === 0) {
      setVolume(volume + 0.0001);
      setHornInterval(hornInterval - 10);
    }
    if (rng() === 0) {
      setCookieCount(cookieCount + 1);
    }
  };

  useEffect(() => {
    if (!startCountdown && cookieCount > 0) {
      setStartCountdown(true);
    }
  }, [startCountdown, cookieCount]);

  useEffect(() => {
    let id: number;
    if (startCountdown && countdown > 0) {
      id = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= SECOND) {
            clearInterval(id);
            return 0;
          }
          return prev - SECOND;
        });
      }, SECOND);
    }

    return () => clearInterval(id);
  }, [startCountdown]);

  // // clearing losing msg
  // useEffect(() => {

  // }, [showLoseMsg]);

  return (
    <>
      {cookieCount > 0 ? (
        <div className="counter"> You have {cookieCount} cookies</div>
      ) : null}
      <img className="pointer" src="triangle.svg"></img>
      <div
        className={isSpinning ? "wheel spin-da-wheel" : "wheel"}
        onClick={isSpinning ? undefined : handleOnclick}
        style={{ "--rotation": `${totalRotation}deg` }}
      >
        <div>
          {countdown} {volume} {hornInterval}{" "}
        </div>
        <div className="partition line-1"></div>
        <div className="uSuck"> DON B BAD PORSON </div>
        <div className="partition line-2"></div>
        <div className="uWin rot"> YOU WIN </div>
      </div>
      <button className="flash-and-zoom" onClick={handleButtonClick}>
        {" "}
        SPEEN THE WHEEL{" "}
      </button>
      {showLoseMsg ? <ULOSE /> : undefined}
    </>
  );
}
export default DAWHEELOFD00M;

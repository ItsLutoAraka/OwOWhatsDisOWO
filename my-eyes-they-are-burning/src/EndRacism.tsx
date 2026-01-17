import { useState } from "react";

type endRacismProps = {
  onClose: any;
  onLOCKOUT: any;
};

function EndRacism({ onClose, onLOCKOUT }: endRacismProps) {
  const disclaimer = "i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1 i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1i wIlL n0T b3 RaCIst oN LutWEEt3r!1!1!1";
  // const disclaimer = "hiiii!";
  const [input, setInput] = useState("");
  const [position, setPosition] = useState(0);
  const [happyLilAccidents, setHappyLilAccidents] = useState(0);

  const handleInputChange = (e: any) => {
    const newInput = e.target.value;

    // Prevent typing beyond disclaimer length
    if (newInput.length > disclaimer.length) return;

    for (let i = 0; i < 100; i++) {
      console.log("heh");
    }

    // Check if user typed a new character or deleted
    if (newInput.length > input.length) {
      // New character typed
      const typedChar = newInput[newInput.length - 1];
      const expectedChar = disclaimer[newInput.length - 1];
      const isCorrect = typedChar === expectedChar;

      if (!isCorrect) {
        setHappyLilAccidents(happyLilAccidents + 1);
      }

      // Add CSS rule for this character (nth-child is 1-indexed)
      const styleSheet = document.styleSheets[0];
      const nthPosition = newInput.length; // Convert to 1-indexed
      const rule = `.typing-text span:nth-child(${nthPosition}) { 
                color: ${isCorrect ? "blue" : "red"} !important; 
                background-color: ${isCorrect ? "rgba(0,0,255,0.2)" : "rgba(255,0,0,0.2)"
        } !important; 
            }`;

      styleSheet.insertRule(rule, styleSheet.cssRules.length);
      setPosition(newInput.length);
    } else if (newInput.length < input.length) {
      // Character(s) were deleted
      const deletedCount = input.length - newInput.length;

      // Reset deleted characters using CSS rules
      for (let i = 0; i < deletedCount; i++) {
        const deletedCharIndex = newInput.length + i;

        const styleSheet = document.styleSheets[0];
        const rule = `.typing-text span:nth-child(${deletedCharIndex + 1}) { 
                    color: white !important; 
                    background-color: transparent !important; 
                }`;

        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      }

      setPosition(newInput.length);
    }

    setInput(newInput);
  };

  const handleClick = () => {
    happyLilAccidents >= 5 ? onLOCKOUT(true) : onClose(false);
  };

  const disclaimerSpans = disclaimer
    .split("")
    .map((char, index) => <span key={index}>{char}</span>);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
          width: "70%",
          height: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          zIndex: "100000",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Comic Sans MS",
            textShadow: "2px 2px 0px black",
            fontSize: "40px",
            userSelect: "none",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            margin: 0,
            marginBottom: "20px",
          }}
          className="typing-text"
        >
          {disclaimerSpans}
        </p>

        <input
          value={input} // Added this!
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            fontFamily: "Comic Sans MS",
            boxSizing: "border-box",
          }}
        // onPaste={(e) => e.preventDefault()}
        />

        <div
          style={{
            color: "white",
            fontFamily: "Comic Sans MS",
            marginTop: "10px",
          }}
        >
          Progress: {position} / {disclaimer.length}
        </div>
        {position === disclaimer.length && input === disclaimer ? (
          <button onClick={handleClick}>I AM NOT RACIST</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EndRacism;

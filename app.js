import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "smile",
  "๐ณ": "dis belief",
  "๐": "sad",
  "๐": "annoyance",
  "๐": "Sunrise",
  "โค๏ธ": "Heart",
  "๐ฅ": "Fire",
  "โจ": "Sparkles",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Crescent Moon",
  "๐ ": "Winking Face",
  "๐": "Slightly Smiling Face",
  "๐ค ": "Zipper-Mouth Face",
  "๐คจ ": "Face with Raised Eyebrow",
  "๐ ": "Neutral Face",
  "๐ ": "Expressionless Face",
  "๐ ": "Unamused Face",
  "๐ ": "Face with Rolling Eyes",
  "๐": "Relieved Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Opps sorry try again ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "black",
          backgroundColor: "orangered",
          display: "block",
          border: "solid black 1px",
          padding: "0.6rem",
          borderRadius: "0.5rem"
        }}
      >
        HOW ARE YOU FEELING TODAY?
      </h1>
      <input
        placeholder="ENTER YOUR EMOJI"
        style={{ width: "68%", padding: "0.7rem" }}
        onChange={changeEventHandler}
      ></input>
      <h1 style={{ color: "pink" }}>{meaning} </h1>

      <p>Hello</p>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "1.5rem",
              maxWidth: "300px",
              display: "blob",
              padding: "0.5 rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

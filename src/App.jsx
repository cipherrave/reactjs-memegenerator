import { ButtonOutline, ButtonSolid } from "./components/Button";
import MEME_DATA from "./assets/meme.json";
import { useState } from "react";
import Draggable from "react-draggable"; // Both at the same time

function App() {
  const [selectedMeme, setSelectedMeme] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  function handleRandomise() {
    const memeLength = MEME_DATA.length;
    const randomIndex = Math.floor(Math.random() * memeLength);
    setSelectedMeme(MEME_DATA[randomIndex]);
    console.log(selectedMeme);
  }

  function text1Change(event) {
    setText1(event.target.value);
  }

  function text2Change(event) {
    setText2(event.target.value);
  }

  function text3Change(event) {
    setText3(event.target.value);
  }

  function text4Change(event) {
    setText4(event.target.value);
  }

  function text5Change(event) {
    setText5(event.target.value);
  }

  function text6Change(event) {
    setText6(event.target.value);
  }

  return (
    <div>
      <div className="all">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1pc",
            padding: "1rem",
            width: "800px",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Meme Generator</h1>
          <div>
            {selectedMeme ? (
              <img
                src={selectedMeme.url}
                alt="meme image"
                style={{ maxWidth: "700px" }}
              />
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "1pc",
            }}
          >
            <ButtonSolid text="🎲 Randomise" onClick={handleRandomise} />
            <ButtonOutline text="💾 Save as JPEG" onClick={handleRandomise} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Draggable>
            <h1 className="draggable">{text1 || "Text 1"}</h1>
          </Draggable>
          <textarea type="text" onChange={text1Change} placeholder="Text 1" />

          <Draggable>
            <h1 className="draggable">{text2 || "Text 2"}</h1>
          </Draggable>
          <textarea type="text" onChange={text2Change} placeholder="Text 2" />

          <Draggable>
            <h1 className="draggable">{text3 || "Text 3"}</h1>
          </Draggable>
          <textarea type="text" onChange={text3Change} placeholder="Text 3" />

          <Draggable>
            <h1 className="draggable">{text4 || "Text 4"}</h1>
          </Draggable>
          <textarea type="text" onChange={text4Change} placeholder="Text 4" />

          <Draggable>
            <h1 className="draggable">{text5 || "Text 5"}</h1>
          </Draggable>
          <textarea type="text" onChange={text5Change} placeholder="Text 5" />

          <Draggable>
            <h1 className="draggable">{text6 || "Text 6"}</h1>
          </Draggable>
          <textarea type="text" onChange={text6Change} placeholder="Text 6" />
        </div>
      </div>
    </div>
  );
}

export default App;

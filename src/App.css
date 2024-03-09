import { ButtonSolid } from "./components/Button";
import MEME_DATA from "./assets/meme.json";
import { useState } from "react";

function App() {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");

  function handleRandomise() {
    const memeLength = MEME_DATA.length;
    const randomIndex = Math.floor(Math.random() * memeLength);
    setSelectedMeme(MEME_DATA[randomIndex]);
    console.log(selectedMeme);
  }

  function handlePositionChange(event) {
    console.log(event);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <div style={{ position: "relative" }}>
          {selectedMeme ? (
            <img
              src={selectedMeme.url}
              alt="meme image"
              style={{
                width: selectedMeme.width + "px",
                height: selectedMeme.height + "px",
              }}
            />
          ) : null}
          {/* h1 depends on the box count */}
          <h1
            draggable
            onDragStart={handlePositionChange}
            style={{
              position: "absolute",
              top: position.x,
              left: position.y,
              cursor: "grab",
              userSelect: "none",
            }}
          >
            {text || "Text 1"}
          </h1>
          <h1 style={{ position: "absolute", top: 30, left: 0 }}>Text 2</h1>
          <h1 style={{ position: "absolute", top: 60, left: 0 }}>Text 3</h1>
        </div>
        <ButtonSolid text="Randomise" onClick={handleRandomise} />
        <ButtonSolid text="Save as JPEG" onClick={handleRandomise} />
        <input type="text" onChange={handleTextChange} />
      </div>
    </div>
  );
}

export default App;

import { ButtonEye, ButtonOutline, ButtonSolid } from "./components/Button";
import MEME_DATA from "./assets/meme.json";
import { useCallback, useRef, useState } from "react";
import Draggable from "react-draggable";
import { toJpeg } from "html-to-image";

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
  }

  function toggleVisibility1() {
    if (document.getElementById("text1").style.display === "none") {
      document.getElementById("text1").style.display = "block";
    } else {
      document.getElementById("text1").style.display = "none";
    }
  }
  function text1Change(event) {
    setText1(event.target.value);
  }

  function toggleVisibility2() {
    if (document.getElementById("text2").style.display === "none") {
      document.getElementById("text2").style.display = "block";
    } else {
      document.getElementById("text2").style.display = "none";
    }
  }
  function text2Change(event) {
    setText2(event.target.value);
  }

  function toggleVisibility3() {
    if (document.getElementById("text3").style.display === "none") {
      document.getElementById("text3").style.display = "block";
    } else {
      document.getElementById("text3").style.display = "none";
    }
  }
  function text3Change(event) {
    setText3(event.target.value);
  }

  function toggleVisibility4() {
    if (document.getElementById("text4").style.display === "none") {
      document.getElementById("text4").style.display = "block";
    } else {
      document.getElementById("text4").style.display = "none";
    }
  }
  function text4Change(event) {
    setText4(event.target.value);
  }

  function toggleVisibility5() {
    if (document.getElementById("text5").style.display === "none") {
      document.getElementById("text5").style.display = "block";
    } else {
      document.getElementById("text5").style.display = "none";
    }
  }
  function text5Change(event) {
    setText5(event.target.value);
  }

  function toggleVisibility6() {
    if (document.getElementById("text6").style.display === "none") {
      document.getElementById("text6").style.display = "block";
    } else {
      document.getElementById("text6").style.display = "none";
    }
  }
  function text6Change(event) {
    setText6(event.target.value);
  }

  const ref = useRef(HTMLDivElement);

  const saveMeme = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meme.jpg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div>
      <div className="all">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            padding: "1rem",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Meme Generator</h1>
          <div id="memeFrame" ref={ref}>
            <div style={{ height: "1px" }}>
              <Draggable>
                <h1
                  className="draggable"
                  id="text1"
                  style={{ display: "none" }}
                >
                  {text1 || "Text 1"}
                </h1>
              </Draggable>
              <Draggable>
                <h1
                  className="draggable"
                  id="text2"
                  style={{ display: "none" }}
                >
                  {text2 || "Text 2"}
                </h1>
              </Draggable>
              <Draggable>
                <h1
                  className="draggable"
                  id="text3"
                  style={{ display: "none" }}
                >
                  {text3 || "Text 3"}
                </h1>
              </Draggable>
              <Draggable>
                <h1
                  className="draggable"
                  id="text4"
                  style={{ display: "none" }}
                >
                  {text4 || "Text 4"}
                </h1>
              </Draggable>
              <Draggable>
                <h1
                  className="draggable"
                  id="text5"
                  style={{ display: "none" }}
                >
                  {text5 || "Text 5"}
                </h1>
              </Draggable>
              <Draggable>
                <h1
                  className="draggable"
                  id="text6"
                  style={{ display: "none" }}
                >
                  {text6 || "Text 6"}
                </h1>
              </Draggable>
            </div>
            {selectedMeme ? (
              <img
                src={selectedMeme.url}
                alt="meme image"
                style={{ maxWidth: "700px", zIndex: "0" }}
                id="memeImg"
              />
            ) : null}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1pc",
            width: "200px",
            margin: "2pc 0 0 0",
          }}
        >
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text1Change} placeholder="Text 1" />
            <ButtonEye text="👁️" id="btn1" onClick={toggleVisibility1} />
          </div>
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text2Change} placeholder="Text 2" />
            <ButtonEye text="👁️" id="btn2" onClick={toggleVisibility2} />
          </div>
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text3Change} placeholder="Text 3" />
            <ButtonEye text="👁️" onClick={toggleVisibility3} />
          </div>
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text4Change} placeholder="Text 4" />
            <ButtonEye text="👁️" id="btn4" onClick={toggleVisibility4} />
          </div>
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text5Change} placeholder="Text 5" />
            <ButtonEye text="👁️" id="btn5" onClick={toggleVisibility5} />
          </div>
          <div style={{ display: "flex", gap: "0.5pc" }}>
            <textarea type="text" onChange={text6Change} placeholder="Text 6" />
            <ButtonEye text="👁️" id="btn6" onClick={toggleVisibility6} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1pc",
            }}
          >
            <ButtonSolid text="🎲 Random" onClick={handleRandomise} />
            <ButtonOutline text="💾 Download" onClick={saveMeme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

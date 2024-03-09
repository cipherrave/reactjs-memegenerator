// component for button with different styles
// props is parameter for component
// default value props when not given

// challenge: merge the three buttons into one button component and has props variant = "solid" | "outline" | "ghost"

export function ButtonSolid(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        all: "unset",
        backgroundColor: "black",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.2rem",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {props.text || "Solid"}
    </button>
  );
}

export function ButtonOutline(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        all: "unset",
        backgroundColor: "transparent",
        color: "black",
        border: "2px solid black",
        padding: "0.5rem 1rem",
        borderRadius: "0.2rem",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {props.text || "Outline"}
    </button>
  );
}

export function ButtonGhost(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        all: "unset",
        width: "fit-content",
        backgroundColor: "transparent",
        color: "black",
        padding: "0.5rem 1rem",
        borderRadius: "0.2rem",
        cursor: "pointer",
      }}
    >
      {props.text || "Ghost"}
    </button>
  );
}

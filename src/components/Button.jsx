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
        borderRadius: "10px",
        cursor: "pointer",
        height: "50px",
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
        backgroundColor: "green",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        cursor: "pointer",
        height: "50px",
      }}
    >
      {props.text || "Outline"}
    </button>
  );
}

export function ButtonEye(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        all: "unset",
        backgroundColor: "#366cbf",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
        cursor: "pointer",
        width: "40px",
      }}
    >
      {props.text || "Solid"}
    </button>
  );
}

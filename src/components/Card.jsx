import { ButtonOutline } from "./Button";

function Card(props) {
  function handleClick() {
    alert("Hello World");
  }
  return (
    <div
      style={{
        border: "2px solid black",

        borderRadius: "0.5rem",
      }}
    >
      <div>
        <div style={{ padding: "1rem" }}>
          <h2>{props.title || "Title"}</h2>
          <h3>{props.description || "This is description"}</h3>
        </div>
        <hr style={{ border: "1px solid black" }} />
        <p style={{ padding: "1rem" }}>
          {props.text ||
            "This is a sample text in a card with a title and description and also an action button"}
        </p>
      </div>
      <div style={{ padding: "0 1rem 1rem" }}>
        <ButtonOutline text="Read more" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Card;

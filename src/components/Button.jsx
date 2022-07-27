import "./button.scss";

export default function Button(props) {
  return (
    <button type="button" className={`button ${props.additionalClass ? props.additionalClass : ""}`}>
      Learn more
      <img src="icon_keyboard_right_mobile.png" alt="arrow right" />
    </button>
  );
}

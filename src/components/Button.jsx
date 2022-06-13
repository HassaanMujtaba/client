import style from "../css/Button.module.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} type={props.type}>
        {props.text}
      </button>
    </div>
  );
}

import Image from "./Image";
import style from "../css/Header.module.css";

export default function Header(props) {
  const logout = () => {
    props.logout(false);
  };
  return (
    <header className={style.header}>
      <label htmlFor="sidebarcheck">
        <span className="fa fa-bars"></span>
      </label>
      <Image className="logo" src="images/logo.png" alt="LOGO" />
      <span className="fa fa-sign-out" onClick={logout}></span>
    </header>
  );
}

import style from "../css/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Dashboard(props) {
  return (
    <div className={style.dashboard}>
      <Header logout={props.loginStatus}></Header>
      <Sidebar />
      
    </div>
  );
}

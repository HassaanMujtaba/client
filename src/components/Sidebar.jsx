import style from "../css/Sidebar.module.css";

export default function Sidebar(props) {
  return (
    <>
      <input
        style={{ display: "none" }}
        type="checkbox"
        id="sidebarcheck"
        defaultChecked
      />
      <div className={style.sidebar} id="sidebar">
        <a href="#">Dashboard</a>
        <a href="#">Cash</a>
        <a href="#">Sale</a>
        <a href="#">Purchase</a>
        <a href="#">Production</a>
        <a href="#">HR Management</a>
      </div>
    </>
  );
}

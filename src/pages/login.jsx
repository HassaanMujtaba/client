import style from "../css/Login.module.css";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Container from "../components/Container";
import Image from "../components/Image";

export default function Login(props) {
  const login = () => {
    props.login(true);
  };
  return (
    <div className={style.login}>
      <div className={style.main}>
        <Container>
          <div style={{ "text-align": "center" }}>
            <Image className="logo" src="images/logo.png" alt="LOGO" />
            <br />
            <h5 style={{ color: "#fff" }}>SIGN IN TO DASHBOARD</h5>
          </div>
          <TextInput
            type="email"
            id="email"
            label="Email"
            placeholder="Type your email"
            required="required"
          />
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Type your password"
            required="required"
          />
          <CheckBox label="Remember Me" id="remember" />
          <Button text="Login" type="submit" onClick={login} />
          <br />
          <a style={{ "text-decoration": "none", color: "#141F45" }} href="#">
            Forgot Password?
          </a>
        </Container>
      </div>
      <div className={style.sidetext}>ARHEX LABS</div>
    </div>
  );
}

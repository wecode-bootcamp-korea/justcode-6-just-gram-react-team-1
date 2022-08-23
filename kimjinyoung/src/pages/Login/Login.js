import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();

  const { setToken, setIsLogin } = props;

  const [active, setActive] = useState(false);
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  function activePassedLogin() {
    return idValue.includes("@") && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  }

  function login() {
    axios({
      method: "post",
      url: "http://auth.jaejun.me:10010/login",
      data: {
        email: idValue,
        password: pwValue,
      },
    }).then((res) => {
      setToken(res.data.access_token);
      localStorage.setItem("token", res.data.access_token);
      alert("로그인 성공!");
      setIsLogin(true);
    });
  }

  function handleId(e) {
    setIdValue(e.target.value);
  }
  function handlePw(e) {
    setPwValue(e.target.value);
  }

  return (
    <div className="container">
      <div id="loginContainer">
        <div className="title">Justgram</div>

        <form className="form">
          <input
            name="id"
            type="text"
            className="loginInput id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={activePassedLogin}
            onChange={handleId}
          />
          <input
            name="pw"
            type="password"
            className="loginInput password"
            placeholder="비밀번호"
            onKeyUp={activePassedLogin}
            onChange={handlePw}
          />
          <button
            className={active ? "activeButton" : "button"}
            onClick={(e) => {
              navigate("/main");
              login();
            }}
            disabled={active ? false : true}
          >
            로그인
          </button>
        </form>

        <Link to="/signup" className="forgot">
          계정이 없다면? 회원가입
        </Link>
      </div>
    </div>
  );
}

export default Login;

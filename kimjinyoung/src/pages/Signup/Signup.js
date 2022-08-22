import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.scss";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  let [active, setActive] = useState(false);
  let [idValue, setIdValue] = useState("");
  let [pwValue, setPwValue] = useState("");

  function activePassedLogin() {
    return idValue.includes("@") && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  }

  function signup() {
    axios({
      method: "post",
      url: "http://auth.jaejun.me:10010/signup",
      data: {
        email: idValue,
        password: pwValue,
      },
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
        <div className="signup"> Signup </div>

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
              navigate("/");
              signup();
            }}
            disabled={active ? false : true}
          >
            회원가입
          </button>
        </form>
        <Link to="/main" className="forgot">
          회원가입이 잘 안된다면?
        </Link>
      </div>
    </div>
  );
}

export default Signup;

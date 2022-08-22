import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    let id = e.target.value
    setIdValue(id);
    id.includes("@") && pwValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false)
  };
  const handlePwInput = (e) => {
    let pw = e.target.value
    setPwValue(pw);
    idValue.includes("@") && pw.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const onSubmit = (e) => {
    navigate('/main')
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <span>Justgram</span>
        </div>
        <div className={styles.formBox}>
          <form
          onSubmit={onSubmit}
          >
            <div className={styles.inputBox}>
              <span>전화번호, 사용자 이름 또는 이메일</span>
              <input type="text" onChange={handleIdInput} />
            </div>
            <div className={styles.inputBox}>
              <span>비밀번호</span>
              <input type="password" onChange={handlePwInput} />
            </div>
            <div>
              <button
                disabled={isValid ? false : true}
                style={{
                  opacity: isValid ? 1 : 0.5,
                }}
              >
                로그인
              </button>
            </div>

            <div>
              <div className={styles.line}>또는</div>
            </div>
          </form>
          <div>
            <button>
              <span>Facebook으로 로그인</span>
            </button>
          </div>
          <Link to="/findpw">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

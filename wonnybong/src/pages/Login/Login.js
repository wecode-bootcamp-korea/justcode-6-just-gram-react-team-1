import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import styles from './Login.module.scss';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const idInputRef = useRef('');
  const pwInputRef = useRef('');

  const ableLoginBtn = () => {
    setIdValue(idInputRef.current.value);
    setPwValue(pwInputRef.current.value);
    idValue.includes('@') && idValue.length >= 5 && pwValue.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <div className={`${styles.container} flex-center`}>
      <div className={`${styles['login-container']}`}>
        <h1 className={`${styles['login-title']}`}>justgram</h1>
        <form className={`${styles['login-form']}`}>
          <LoginInput
            id='uid'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
            onAbleLoginBtn={ableLoginBtn}
            ref={idInputRef}
          ></LoginInput>
          <LoginInput
            id='upw'
            type='password'
            placeholder='비밀번호'
            onAbleLoginBtn={ableLoginBtn}
            ref={pwInputRef}
          ></LoginInput>
          <Link to='/main'>
            <button id={`${styles['login-btn']}`} disabled={disabled}>
              로그인
            </button>
          </Link>
        </form>
        <div className='flex-center'>
          <a className={`${styles['find-pw']}`} href='/'>
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

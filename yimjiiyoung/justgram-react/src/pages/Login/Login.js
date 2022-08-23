import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main');
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h1 className='justgram-title'>Justgram</h1>
        <form id='login-form'>
          <input
            type='text'
            id='input-id'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input type='password' id='input-pw' placeholder='비밀번호' />
          <button id='login-btn' type='submit'>
            로그인
          </button>
        </form>
        <span id='search-pw' onClick={goMain}>
          비밀번호를 잊으셨나요?
        </span>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goMain = () => {
    navigate('/main');
  };

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes('@') && password.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePWInput = (e) => {
    const pwValue = e.target.value;
    setPassword(pwValue);
    id.includes('@') && pwValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
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
            onChange={handleIdInput}
          />
          <input
            type='password'
            id='input-pw'
            placeholder='비밀번호'
            onChange={handlePWInput}
          />
          <button
            style={{ backgroundColor: isValid ? '#039be5' : '#bbdefb' }}
            id='login-btn'
            type='submit'
          >
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

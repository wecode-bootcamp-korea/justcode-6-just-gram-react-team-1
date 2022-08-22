import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Findpw() {
  const navigate = useNavigate();
  const [id, setIdValue] = useState('');
  const [pw, setPwValue] = useState('');

  const onSubmit = (e) => {
    console.log(e.target[0].value)
    console.log(e.target[1].value);
    e.preventDefault();
    axios
      .post("http://auth.jaejun.me:10010/signup", {
        email: {id},
        password: {pw},
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            setIdValue(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="pw"
          onChange={(e) => {
            setPwValue(e.target.value);
          }}
        />
        <button>회원가입</button>
      </form>
    </div>
  );
}

export default Findpw;
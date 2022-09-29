import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Join() {
  const navigate = useNavigate();
  const [id, setIdValue] = useState('');
  const [pw, setPwValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://auth.jaejun.me:10010/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
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

export default Join;
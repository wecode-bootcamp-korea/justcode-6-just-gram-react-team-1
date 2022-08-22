import React, { useState } from 'react';
import "./Login.scss"
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    

    const handleIdInput = (e) => {
        const idValue = e.target.value;
        setId(idValue);
        idValue.includes("@") && password.length >=5 
        ? setIsValid(true): setIsValid(false);
    };

    const handlePwdInput = (e) =>{
        const pwdValue = e.target.value
        setPassword(pwdValue);
        id.includes("@") && pwdValue.length >=5
        ? setIsValid(true) : setIsValid(false); //삼항연산자 

    };

    const handleLogin = ()=>{
        fetch("api주소",{
            method : "POST",
            headers:{
                'Contnet-Type' : 'application/json'
            },
            body :{
                email : String,
                password : String,
            },
        })
        .then((res)=>res.json())
        .then((data) => console.log(data))
    }

    return (
      <div className="Login">
        <div className="flex_wrapper">
            <div className="login-container">
                <div className="flex_wrapper">
                    <span className="logo-style">Justgram</span>
                </div>
                <div>
                    <div id="login-form">  
                        <div className=" flex_wrapper">
                            <input id="login_id" 
                                className="input_style" 
                                type="email" 
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                                onChange={handleIdInput}
                            />
                        </div>
                        <div className=" flex_wrapper">
                            <input id="login_pw" 
                                className="input_style" 
                                type="password" 
                                placeholder="비밀번호" 
                                onChange={handlePwdInput}
                            />
                        </div>
                        <div className="flex_wrapper">
                            <button style = {{backgroundColor : isValid ? '#4ec5f4' : '#cde9f4'}} id="login_button" className="button_style" onClick={handleLogin} type="submit">로그인</button>
                        </div>
                    </div>
                </div>    
                <div className="flex_wrapper">
                     <span className="forget">비밀번호를 잊으셨나요?</span>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Login;
  
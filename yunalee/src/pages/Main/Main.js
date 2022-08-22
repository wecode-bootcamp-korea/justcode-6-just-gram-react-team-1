import React, { useEffect, useState } from 'react';
import "./Main.scss"
import Feeds from "./Feed"
import Feed from './Feed';


function Main() {

    const [feeds , setFeeds] = useState([]);

    useEffect(() =>{
        fetch("/data/feeds.json")
        .then((res)=> res.json())//JSON함수형태로 받아오기 
        .then((data)=>{
            setFeeds(data.feedData);
        }) 
    })

    return(
      <div className="Main">
            <header className = "to_do header_wrapper">
                <div className = "vertical_center">
                    <img className="header_icon_style"alt="instagram logo" src="img/instagram.png"/>
                    <span className = "header_text">| Justgram</span>
                </div>
                <div className = "vertical_center">
                    <img className ="secrch_icon" alt="magnifier" src="img/magnifier.png"/>
                    <input className="input_wrapper" placeholder="검색"/>
                </div>
                <div className="vertical_center">
                    <img className="header_icon_style" alt = "search icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                    <img className="header_icon_style header_icon_margin" alt = "heart icon"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                    <img className="header_icon_style header_icon_margin" alt = "my icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                </div> 
            </header>

             <nav className ="nav_flex">
                <div className = "to_do nav_container ">
                    <img className ="follow_proflie_box" alt="ice_buck" src="./img/KakaoTalk_20220803_162128973.jpg"/>
                    <img className="follow_proflie_box"  alt="anmial crossing fox" src="./img/KakaoTalk_20220803_162128973_01.jpg"/>
                    <img className="follow_proflie_box"  alt ="chonsik" src="./img/KakaoTalk_20220803_162128973_02.jpg"/>
                    <img className="follow_proflie_box" alt = "anmial crossing mati"src="./img/KakaoTalk_20220803_162128973_03.jpg"/>
                </div>
            </nav>
            <div>
                {feeds.map((feed) => {
                    return < Feed feedData={feed}/>;
                })}
            </div>
    
        </div>    
    );
  }
  
  export default Main;
  
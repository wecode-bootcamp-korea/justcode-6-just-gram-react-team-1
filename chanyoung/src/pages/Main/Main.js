import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Feed from "./Feed"
import styles from "./Main.module.scss"
import {useNavigate} from 'react-router-dom'


function Main() {
  const [userId, setUserId] = useState("LoginUser");
  const [feeds, setFeeds] = useState([]);
  const [userName] = useState("LoginUser");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/feedData.json").then((res) => setFeeds(res.data));
    } catch {
      alert("ERROR");
    }
  }, []);

  useEffect(() => {
    console.log(localStorage.length)
    fetch("http://auth.jaejun.me:10010/me", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((res) => (res.email ? setUserId(res.email) : navigate("/login")));
  }, []);
  return (
    <>
      <Nav />
      <div className={styles.wrap}>
        <div className={styles.content}>
          {feeds.map((props) => (
            <Feed
              key={props.id}
              loginuser={userName}
              username={props.username}
              feedcontent={props.feedcontent}
              commentlist={props.commentlist}
              feedpicture={props.feedpicture}
              like={props.like}
              writerprofile={props.writerprofile}
            />
          ))}
        </div>
        <div className={styles.loginProfile}>
          <div>
            <img src="image/loginprofile.jpg" alt="프로필"/>
          </div>
          <div>
            <span>{userId}</span>
            <span>poy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
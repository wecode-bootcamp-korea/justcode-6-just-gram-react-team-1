import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Feed from "./Feed"
import styles from "./Main.module.scss"


function Main() {
  const [feeds, setFeeds] = useState([]);
  const [userName] = useState("LoginUser");
  useEffect(() => {
    try {
      axios.get("http://localhost:3000/feedData.json").then((res) => setFeeds(res.data));
    } catch {
      alert("ERROR");
    }
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
            <img src="image/loginprofile.jpg" />
          </div>
          <div>
            <span>{userName}</span>
            <span>poy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
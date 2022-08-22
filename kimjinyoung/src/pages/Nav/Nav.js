import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import "./Nav.scss";

function ProfileMenu(props) {
  const { token } = props;
  const navigate = useNavigate();

  function viewProfile() {
    console.log(token);
    axios({
      method: "get",
      url: "http://auth.jaejun.me:10010/me",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      const value = res.data;
      alert(`id : ${value.id}, email : ${value.email}`);
    });
  }

  return (
    <div className="profileMenu">
      <div className="profileMenuList flexCenter" onClick={viewProfile}>
        <img src="img/profile.png" alt="menuInfo" className="menuicons" />{" "}
        프로필
      </div>
      <div
        className="profileMenuList flexCenter"
        onClick={() => {
          alert("미구현!");
        }}
      >
        <img src="img/bookmark.png" alt="menuSaved" className="menuicons" />{" "}
        저장됨
      </div>
      <div
        className="profileMenuList flexCenter"
        onClick={() => {
          alert("미구현!");
        }}
      >
        <img src="img/settings.png" alt="menuSetting" className="menuicons" />{" "}
        설정
      </div>
      <div
        className="profileMenuList flexCenter"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        로그아웃
      </div>
    </div>
  );
}

function Nav(props) {
  const { token } = props;

  const [menu, setMenu] = useState("OFF");
  let content = null;
  if (menu === "ON") content = <ProfileMenu token={token} />;

  return (
    <nav id="nav" className="flexCenter">
      <div className="flexCenter">
        <img src="img/instagram.png" alt="logo" className="navLogo" />
        <span className="navTitle">Justgram</span>
      </div>

      <div className="searchBox flexCenter">
        <input type="text" placeholder="검색" className="searchInput" />
        <img src="img/search.png" alt="find" className="searchIcon" />
      </div>

      <div className="navIcons flexCenter">
        <img src="img/explore.png" alt="explore" className="navExplore" />
        <img src="img/heart.png" alt="heart" className="navHeart" />
        <img src="img/profile.png" alt="info" className="navInfo" />
        <div>
          <img
            src="img/me.jpg"
            alt="profile"
            className="navProfile"
            onClick={(e) => {
              if (menu === "OFF") setMenu("ON");
              else setMenu("OFF");
            }}
          />
          {content}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

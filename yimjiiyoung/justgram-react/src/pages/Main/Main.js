import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import Feed from './Feed';

function Main() {
  const [feeds, setFeeds] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/feeds.json')
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data.feedData);
      });
  }, []);

  useEffect(() => {
    fetch('http://auth.jaejun.me:10010/me', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjEyNjIxNTUsImV4cCI6MTY2Mzk0MDU1NX0.SvIC9kvr9dhGxWhqEOBqdXbAicnxr_PdaZ4-1zKx36s',
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.email !== undefined ? setUserInfo(data) : navigate('/')
      );
  }, []);

  return (
    <div className='main'>
      <nav className='nav'>
        <div className='nav_left'>
          <div id='insta-icon'>
            <i className='fa-brands fa-instagram'></i>
          </div>
          <div id='division'></div>
          <span className='justgram-title'>Justgram</span>
        </div>

        <div className='nav_center'>
          <div id='search-icon'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <input id='search' type='text' placeholder='검색' />
        </div>

        <div className='nav_right'>
          <img
            alt='탐색'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
            width='35px'
          />
          <img
            alt='하트'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
            width='35px'
          />
          <p>{userInfo && userInfo.email}</p>
        </div>
      </nav>

      <main>
        {feeds.map((feed) => {
          return <Feed key={feed.feedId} feedData={feed} />;
        })}
      </main>
    </div>
  );
}

export default Main;

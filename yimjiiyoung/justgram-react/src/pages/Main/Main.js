import React from 'react';
import './Main.scss';
import Feed from './Feed';

function Main(props) {
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
          <img
            alt='마이'
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png'
            width='35px'
          />
        </div>
      </nav>

      <main>
        <Feed />
      </main>
    </div>
  );
}

export default Main;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Main.module.scss';

const ProfileToggle = ({ visibility }) => {
  return (
    <ul
      id={`${styles['profile-menu']}`}
      className='flex-column'
      style={{ visibility }}
    >
      <li className={`${styles['menu-list']} width80`}>
        <div href='#' className='vertical-center-left'>
          <img
            className='small-icon-setting mr10'
            src='images/user.png'
            alt='프로필 아이콘'
          />
          <p>프로필</p>
        </div>
      </li>
      <li className={`${styles['menu-list']} width80`}>
        <div href='#' className='vertical-center-left'>
          <img
            className='small-icon-setting mr10'
            src='images/bookmark.png'
            alt='저장됨 아이콘'
          />
          <p>저장됨</p>
        </div>
      </li>
      <li className={`${styles['menu-list']} width80`}>
        <div href='#' className='vertical-center-left'>
          <img
            className='small-icon-setting mr10'
            src='images/settings.png'
            alt='설정 아이콘'
          />
          <p>설정</p>
        </div>
      </li>
      <li className={`${styles['menu-list']} width80`}>
        <div href='#' className='vertical-center-left'>
          <img
            className='small-icon-setting mr10'
            src='images/change.png'
            alt='계정 전환 아이콘'
          />
          <p>계정 전환</p>
        </div>
      </li>
      <li className={`${styles['menu-list']} ml15`}>
        <Link to='/'>
          <p> 로그아웃 </p>
        </Link>
      </li>
    </ul>
  );
};

export default ProfileToggle;

import React, { useRef, useState } from 'react';
import SearchToggle from './SearchToggle';
import ProfileToggle from './ProfileToggle';
import styles from '../Main.module.scss';

const Header = () => {
  const [profileVisibility, setProfileVisibility] = useState('hidden');
  const [searchVisibility, setSearchVisibility] = useState('hidden');
  const [buttonVisibility, setButtonVisibility] = useState('hidden');
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchInput = useRef();
  const [nowSearching, setNowSearching] = useState(false);

  const showToggle = () => {
    setProfileVisibility((visibility) =>
      visibility === 'hidden' ? 'visible' : 'hidden'
    );
  };
  const onStartSearch = () => {
    setSearchVisibility('visible');
    setButtonVisibility('visible');
  };
  const onEndSearch = () => {
    setSearchVisibility('hidden');
    searchInput.current.value
      ? setButtonVisibility('visible')
      : setButtonVisibility('hidden');
  };
  const onSearch = (e) => {
    setSearchVisibility('visible');
    setButtonVisibility('visible');
    e.target.value ? setNowSearching(true) : setNowSearching(false);
    setSearchKeyword(searchInput.current.value);
  };

  const onClearInput = () => {
    searchInput.current.value = '';
    searchInput.current.value ? setNowSearching(true) : setNowSearching(false);
    onEndSearch();
  };

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles['header-container']} flex-center`}>
          <h2 className={`${styles.title} mr10`}>justgram</h2>

          <div className={`${styles.search}`}>
            <div className={`${styles['search-container']}`}>
              <img
                className={`${styles['search-icon']}`}
                src='images/search_icon.png'
                alt='검색 아이콘'
              />
              <input
                ref={searchInput}
                onFocus={onStartSearch}
                onBlur={onEndSearch}
                onChange={onSearch}
                id={styles.search}
                type='text'
                placeholder='검색'
              />

              <SearchToggle
                searchVisibility={searchVisibility}
                buttonVisibility={buttonVisibility}
                nowSearching={nowSearching}
                onClearInput={onClearInput}
                ref={searchInput}
                searchKeyword={searchKeyword}
              />
            </div>
          </div>
          <nav className={`${styles.nav} ml15`}>
            <ul>
              <li className='pointer'>
                <img
                  className='icon-setting'
                  alt='홈으로'
                  src='images/home_icon.png'
                />
              </li>
              <li className='pointer'>
                <img
                  className='icon-setting'
                  alt='메세지'
                  src='images/message_icon.png'
                />
              </li>
              <li className='pointer'>
                <img
                  className='icon-setting'
                  alt='게시글 작성'
                  src='images/plus_icon.png'
                />
              </li>
              <li className='pointer'>
                <img
                  className='icon-setting'
                  alt='탐색'
                  src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
                />
              </li>
              <li className='pointer'>
                <img
                  className='icon-setting'
                  alt='소식'
                  src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
                />
              </li>
              <li className={`${styles['toggle-parents']} pointer`}>
                <div onClick={showToggle} id={styles['profile-btn']}>
                  <img
                    className='icon-setting curcle'
                    alt='프로필'
                    src='images/default_profile.png'
                  />
                </div>
                <ProfileToggle visibility={profileVisibility} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

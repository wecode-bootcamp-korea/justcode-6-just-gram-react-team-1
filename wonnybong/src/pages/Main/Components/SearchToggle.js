import React, { forwardRef, useState, useEffect } from 'react';
import styles from '../Main.module.scss';
import SearchItem from './SearchItem';
import SearchLoading from './SearchLoading';
import axios from 'axios';

const SearchToggle = forwardRef(
  (
    {
      searchVisibility,
      buttonVisibility,
      nowSearching,
      onClearInput,
      searchKeyword,
    },
    ref
  ) => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
      axios
        .get('data/profiles.json')
        .then((res) => setUserInfo(res.data))
        .catch((err) => console.log(err));
    }, []);

    const selectView = () => {
      let filterData = userInfo
        .filter((info) => {
          if (searchKeyword == false) {
            return;
          } else if (info.userId.includes(searchKeyword)) {
            return info;
          }
        })
        .map((info) => {
          console.log(info, 'map info');
          return (
            <SearchItem
              key={info.id}
              userId={info.userId}
              profileImg={info.profileImg}
              desc={info.desc}
            />
          );
        });
      if (filterData.length == 0) {
        return <SearchLoading textKR={'검색 결과 없음'} textEN={'No Result'} />;
      } else {
        return filterData;
      }
    };

    return (
      <>
        <ul
          id={`${styles['search-list-container']}`}
          style={{ visibility: searchVisibility }}
        >
          {nowSearching ? null : (
            <div className='vertical-center'>
              <h3 className='bold'>최근 검색 항목</h3>
              <span className='bold color-blue'>모두 지우기</span>
            </div>
          )}
          {nowSearching
            ? selectView()
            : userInfo.slice(0, 4).map((info) => {
                return (
                  <SearchItem
                    key={info.id}
                    userId={info.userId}
                    profileImg={info.profileImg}
                    desc={info.desc}
                  />
                );
              })}
        </ul>
        <div>
          <button
            id={`${styles['searchBtn']}`}
            onClick={onClearInput}
            style={{ visibility: buttonVisibility }}
          >
            <img
              className={`${styles['delete-icon']}`}
              src='images/delete.png'
              alt='삭제 버튼'
            />
          </button>
        </div>
      </>
    );
  }
);

export default SearchToggle;

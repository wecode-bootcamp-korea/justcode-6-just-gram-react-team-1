import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import styles from '../Main.module.scss';
import axios from 'axios';

const MainBody = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios
      .get('data/feeds.json')
      .then((res) => setFeeds(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/data/feeds.json")
  //     .then((res) => res.json())
  //     .then((data) => setFeeds(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <main id='main' className={`${styles['main-setting']}`}>
      {feeds.map((feed) => {
        return (
          <Feed
            key={feed.id}
            userName={feed.userName}
            imageSrc={feed.imageSrc}
            imageAlt={feed.imgAlt}
            likeCount={feed.likeCount}
            content={feed.content}
            allComment={feed.allComment}
            createdTime={feed.createdTime}
            getComments={feed.comments}
          />
        );
      })}
    </main>
  );
};

export default MainBody;

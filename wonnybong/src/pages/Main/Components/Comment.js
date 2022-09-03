import { useState } from 'react';
import styles from '../Main.module.scss';

const Comment = ({ id, userId, content, deleteComment }) => {
  const [like, setLike] = useState(true);
  const [heartCss, setHeartCss] = useState('heart');

  const likeComment = () => {
    setLike((like) => !like);
    setHeartCss(like ? 'like-heart' : 'heart');
  };

  return (
    <>
      <li className={`${styles['new-com']}`}>
        <span className="bold mr5">{userId}</span>
        {content}
        <span
          onClick={likeComment}
          className={`icon-setting 
            ${styles[heartCss]}
          `}
        ></span>
        <span
          id={id}
          onClick={deleteComment}
          className={`icon-setting ${styles['x-icon']}`}
        ></span>
      </li>
    </>
  );
};

export default Comment;

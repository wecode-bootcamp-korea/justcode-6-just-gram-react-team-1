import React, { useState, useRef, useEffect } from 'react';
import Comment from './Comment';

function Feed({ feedData }) {
  // const [comment, setComment] = useState();
  const [id, setId] = useState(1);
  const value = useRef(); // 담을 값
  const [inputState, setInput] = useState('');

  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    fetch('/data/comments.json')
      .then((res) => res.json())
      .then((data) => setCommentArray(data.comments));
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    setId(id + 1);
    const newComment = {
      id: id,
      content: inputState,
      createdAt: new Date().toLocaleString(),
    };
    // value.current.value = '';
    setInput('');
    setCommentArray([...commentArray, newComment]);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <article className='feeds'>
      <div className='feeds-header'>
        <div className='feeds-header_left'>
          <div>
            <img
              alt='프로필 이미지'
              src='/images/나의 아바타.jpg'
              id='profile-img'
            />
          </div>
          <span className='nickname'>{feedData.username}</span>
        </div>
        <div className='feeds-header_right'>
          <i className='fa-solid fa-ellipsis'></i>
        </div>
      </div>

      <img
        alt='피드 이미지'
        src={feedData.feedImages[0].imageUrl}
        id='feed-img'
        width='400px'
        height='500px'
      />

      <div>
        <span>{feedData.content}</span>
      </div>

      <div className='feeds-icons'>
        <div className='feeds-icons_left'>
          <div>
            <i className='fa-solid fa-heart' color='red'></i>
          </div>
          <div>
            <i className='fa-regular fa-comment'></i>
          </div>
          <div>
            <i className='fa-regular fa-share-from-square'></i>
          </div>
        </div>
        <div className='feeds-icons_right'>
          <i className='fa-regular fa-bookmark'></i>
        </div>
      </div>

      <div className='feeds-likes'>
        <div>
          <img
            alt='프로필 이미지'
            src='/images/나의 아바타.jpg'
            id='profile-img'
          />
        </div>
        <div>
          <span className='nickname'>{feedData.username}</span>님 외 26명이
          좋아합니다
        </div>
      </div>

      <div className='feeds-comments'>
        {commentArray.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment
                id={comment.id}
                content={comment.content}
                writer={'익명'}
                createdAt={comment.createdAt || '2022-01-01'}
              />
            </li>
          );
        })}
      </div>
      <div className='feed-time'>5분 전</div>
      <div className='write-comment'>
        <form type='submit' className='write-comment-form'>
          <input
            className='write-comment-input'
            type='text'
            placeholder='댓글 달기...'
            ref={value}
            value={inputState}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className='write-comment-btn'
            onClick={addComment}
            onKeyDown={onKeyDown}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
}

export default Feed;

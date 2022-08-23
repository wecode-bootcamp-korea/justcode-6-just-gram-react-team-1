import React, { useState } from 'react';

function Feed() {
  const [comment, setComment] = useState();
  const [id, setId] = useState(1);
  const [commentArray, setCommentArray] = useState([
    {
      id: 0,
      content: '지영님 화이팅!',
    },
  ]);

  const addComment = (e) => {
    e.preventDefault();
    setId(id + 1);
    const newComment = {
      id: id,
      content: comment,
    };
    setCommentArray([...commentArray, newComment]);
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
          <span className='nickname'>roxylife</span>
        </div>
        <div className='feeds-header_right'>
          <i className='fa-solid fa-ellipsis'></i>
        </div>
      </div>

      <img
        alt='피드 이미지'
        src='/images/건강.jpg'
        id='feed-img'
        width='400px'
        height='500px'
      />

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
          <span className='nickname'>roxylife</span>님 외 26명이 좋아합니다
        </div>
      </div>

      <div className='feeds-comments'>
        {commentArray.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </div>
      <div className='feed-time'>5분 전</div>
      <div className='write-comment'>
        <form type='submit' className='write-comment-form'>
          <input
            className='write-comment-input'
            type='text'
            placeholder='댓글 달기...'
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button className='write-comment-btn' onClick={addComment}>
            게시
          </button>
        </form>
      </div>
    </article>
  );
}

export default Feed;

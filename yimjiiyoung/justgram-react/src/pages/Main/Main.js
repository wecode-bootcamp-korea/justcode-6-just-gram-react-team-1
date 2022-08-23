import React from 'react';
import './Main.scss';

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

          <div className='feeds-comments'></div>
          <div className='feed-time'>5분 전</div>
          <div className='write-comment'>
            <form type='submit' className='write-comment-form'>
              <input
                className='write-comment-input'
                type='text'
                placeholder='댓글 달기...'
              />
              <button className='write-comment-btn' disabled='false'>
                게시
              </button>
            </form>
          </div>
        </article>

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
            src='/images/손씻기.jpg'
            id='feed-img'
            width='400px'
            height='500px'
          />

          <div className='feeds-icons'>
            <div className='feeds-icons_left'>
              <div>
                <i className='fa-solid fa-heart'></i>
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
              <span className='nickname'>roxylife</span>님 외 10명이 좋아합니다
            </div>
          </div>

          <div className='feeds-comments'></div>
          <div className='feed-time'>5분 전</div>
          <div className='write-comment'>
            <form type='submit' className='write-comment-form'>
              <input
                className='write-comment-input'
                type='text'
                placeholder='댓글 달기...'
              />
              <button className='write-comment-btn' disabled='false'>
                게시
              </button>
            </form>
          </div>
        </article>

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
            src='/images/테이블.jpg'
            id='feed-img'
            width='400px'
            height='500px'
          />

          <div className='feeds-icons'>
            <div className='feeds-icons_left'>
              <div>
                <i className='fa-solid fa-heart'></i>
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
              <span className='nickname'>roxylife</span>님 외 5명이 좋아합니다
            </div>
          </div>

          <div className='feeds-comments'></div>
          <div className='feed-time'>5분 전</div>
          <div className='write-comment'>
            <form type='submit' className='write-comment-form'>
              <input
                className='write-comment-input'
                type='text'
                placeholder='댓글 달기...'
              />
              <button className='write-comment-btn' disabled='false'>
                게시
              </button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Main;

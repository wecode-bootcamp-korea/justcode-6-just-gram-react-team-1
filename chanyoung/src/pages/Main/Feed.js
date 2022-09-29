import styles from "./Feed.module.scss";
import { useState, useRef } from "react";
import Comments from "./Comments";

function Feed({
  username,
  loginuser,
  feedcontent,
  commentlist,
  feedpicture,
  like,
  writerprofile,
}) {
   // 로그인 한 아이디
  const [commmentArr, setCommentArr] = useState(commentlist);
  const [isValid, setIsValid] = useState(true);
  const [id, setId] = useState(commentlist.length+1);
  const [feedHeart, setFeedHeart] = useState("image/heart.png");
  const ref = useRef();
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value.length > 0) {
      setId(id+1);
      let newComment = {
        id: id,
        name: loginuser,
        comment: ref.current.value,
      };
      setCommentArr([...commmentArr, newComment]);
      ref.current.value = "";
      setIsValid(true);
    }
  };

  const onChange = () => {
    ref.current.value.length > 0 ? setIsValid(false) : setIsValid(true);
  };

  const heartClick = () => {
    if (feedHeart === "image/heart.png") setFeedHeart("image/fullheart.png");
    else setFeedHeart("image/heart.png");
  }
  return (
    <article>
      <div className={styles.feedHead}>
        <div className={styles.profile}>
          <img src={writerprofile} alt="프로필" />
          <a href="{() => false}">{username}</a>
        </div>
        <div>
          <img src="image/dots.png" alt="더보기" />
        </div>
      </div>
      <div className={styles.feedBody}>
        <img src={feedpicture} alt="피드 사진" />
      </div>
      <div className={styles.feedMenu}>
        <div>
          <button onClick={heartClick}>
            <img src={feedHeart} alt="좋아요" />
          </button>
          <button>
            <img src="image/chat.png" style={{ width: "33px" }} alt="댓글" />
          </button>
          <button>
            <img src="image/send.png" alt="보내기" />
          </button>
        </div>
        <div>
          <button>
            <img src="image/save-instagram.png" alt="저장" />
          </button>
        </div>
      </div>

      {/* ////////////// comment //////////// */}

      <div className={styles.feedComment}>
        <div>
          <span style={{ fontWeight: "bold" }}>{`좋아요 ${like} 개`}</span>
        </div>
        <div>
          <a href="{() => false}">{username}</a>
          <span>{feedcontent}</span>
        </div>

        {/* {cmtArr.map((props) => (
          <Comments
            key={props.id}
            userId={props.name}
            userComment={props.comment}
          />
        ))} */}

        <div>
          {commmentArr.map((props) => (
            <Comments
              key={props.id}
              userId={props.name}
              userComment={props.comment}
            />
          ))}
        </div>
        <span>28분 전</span>
      </div>
      <div className={styles.feedWrite}>
        <form onSubmit={onSubmit}>
          <input ref={ref} onChange={onChange} placeholder="댓글 달기..." />
          <button
            style={{
              opacity: isValid ? 0.5 : 1,
            }}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
}
export default Feed;
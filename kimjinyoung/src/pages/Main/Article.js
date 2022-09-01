import React, { useState } from "react";
import Comments from "./Comments";

function Article(props) {
  const { articles, comments, setComments, setArticles } = props;

  const [nextId, setNextId] = useState(3);

  return articles.map((art, i) => {
    function leaveComment(e) {
      e.preventDefault();
      const comment = e.target.comment.value;
      const newComments = [...comments];
      if (e.target.comment.value !== "") {
        comments.map((cmt, i) => {
          if (art.id === cmt.articleId) {
            newComments[i].comments.push({
              id: nextId,
              writer: "rlawlsyoung",
              comment: comment,
            });
            setComments(newComments);
            setNextId(nextId + 1);
            e.target.comment.value = "";
          }
        });
      }
    }

    function like(e) {
      if (art.isLiked === false) {
        const newArticles = [...articles];
        newArticles[i].isLiked = true;
        setArticles(newArticles);
      } else {
        const newArticles = [...articles];
        newArticles[i].isLiked = false;
        setArticles(newArticles);
      }
    }

    return (
      <article className="article" key={art.id}>
        <div className="articleTop flexCenter">
          <div className="flexCenter">
            <input
              type="image"
              src={art.articleProfile}
              alt="profile image"
              className="articleProfile flexCenter"
            />
            <span className="articleIdTop articleId bold">{art.articleId}</span>
          </div>
          <div>
            <img src="img/more.png" alt="more" className="articleMore" />
          </div>
        </div>

        <input
          type="image"
          src={art.articleImg}
          alt="article image"
          className="articleImg"
        />

        <div className="articleMiddle flexCenter">
          <div className="articleIcons">
            {art.isLiked ? (
              <img
                src="img/redHeart.png"
                alt="heart"
                className="articleHeart"
                onClick={like}
              />
            ) : (
              <img
                src="img/heart.png"
                alt="heart"
                className="articleHeart"
                onClick={like}
              />
            )}
            <img src="img/chat.png" alt="chat" className="articleChat" />
            <img src="img/share.png" alt="share" className="articleShare" />
          </div>
          <img
            src="img/bookmark.png"
            alt="bookmark"
            className="articleBookmark"
          />
        </div>
        <div className="articleBottom">
          <div className="chatBox like">
            <span className="bold liker">{art.liker}</span>님{" "}
            <span className="bold">
              외 <span className="likers">{art.likers}</span>명
            </span>
            이 좋아합니다.
          </div>
          <div className="commentBox">
            <div className="chatBox writer">
              <span className="bold articleId">{art.articleId}</span>{" "}
              <span className="articleText">{art.articleText}</span>
            </div>
          </div>
          <Comments art={art} comments={comments} setComments={setComments} />
          <form
            className="commentInputWrapper flexCenter"
            onSubmit={leaveComment}
          >
            <div className="commentInputBox">
              <input
                name="comment"
                type="text"
                placeholder="댓글 달기..."
                className="commentInput"
                onChange={(e) => {
                  if (e.keyCode === 13) leaveComment();
                }}
              />
            </div>
            <button id={art.id} className="commentBtn bold">
              게시
            </button>
          </form>
        </div>
      </article>
    );
  });
}

export default Article;

import  "./Comments.module.scss"
import {useState} from 'react'

function Comments({ userId, userComment }) {
  const [check, setCheck] = useState("image/heart.png");
  const onClick = () => {
    check === "image/heart.png"
      ? setCheck("image/fullheart.png")
      : setCheck("image/heart.png");
  }
  return (
    <div>
      <a href="{() => false}">{ userId }</a>
      <span>{userComment}</span>
      <img
        onClick={onClick}
        src={check}
        alt="댓글 좋아요"
      />
    </div>
  );
}
export default Comments;
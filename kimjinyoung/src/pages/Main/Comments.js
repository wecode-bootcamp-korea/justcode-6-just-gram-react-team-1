function Comments(props) {
  const { art, comments, setComments } = props;

  return comments.map((data, i) => {
    if (data.articleId === art.id) {
      return data.comments.map((cmt, j) => {
        function like(e) {
          if (data.comments[j].isLiked === false) {
            const newComments = [...comments];
            newComments[i].comments[j].isLiked = true;
            setComments(newComments);
          } else {
            const newComments = [...comments];
            newComments[i].comments[j].isLiked = false;
            setComments(newComments);
          }
        }

        return (
          <div className="commentWrapper" key={cmt.id}>
            <div className="chatBox comment">
              <span className="bold commentId">{cmt.writer}</span>{" "}
              <span className="commentText">{cmt.comment}</span>
            </div>
            {data.comments[j].isLiked ? (
              <img
                src="img/redHeart.png"
                alt="heart"
                className="commentHeart"
                onClick={like}
              />
            ) : (
              <img
                src="img/heart.png"
                alt="heart"
                className="commentHeart"
                onClick={like}
              />
            )}
          </div>
        );
      });
    }
  });
}

export default Comments;

import './Comment.scss'



function Comment (props) {

    const {id, content, writer,createdAt} = props; //구조분해할당 

    return <span>{content}-{writer} <span className="createdAt">{createdAt}</span></span>

}

export default Comment;
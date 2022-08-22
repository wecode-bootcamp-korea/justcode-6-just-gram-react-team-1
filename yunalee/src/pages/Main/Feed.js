import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useRef, useState } from 'react';
import Comment from './Comment';


function Feed({feedData }){ 

    const [comment,setComment] = useState();
    const [id,setId] = useState(1);
    const value = useRef();
    const [inputState, setInput] = useState();


    const [commentArray, setCommentArray] = useState([]);

    useEffect (()=>{
        fetch("/data/comments.json")
        .then((res)=> res.json())
        .then((data) => setCommentArray(data.comments))
    }, [])

    const addComment = () => {
        setId(id+1); 
        const newComment  = {
            id : id,
            content : inputState,
            createdAt : new Date().toLocaleString()
        };
        setInput("");
        setCommentArray([...commentArray,newComment]);
    };

    const onKeyDown = (e)=> {
        if(e.key === 'Enter'){
            addComment();
        }
    }

    return(
        <div>
            <main className = " contents_wrapper">
                <div></div>
                <div className = "feed_container">
                    <div className = "to_do align_horzien">
                        <div>
                            <img className = "poflie_image" alt="proflie_pengsoo" src={feedData.userImg}/>{feedData.userName}
                            
                        </div>
                        <div>...</div>
                    </div>
                    <div className = "to_do feed_image_wrapper">
                        <img className="feed_image"src={feedData.feedImages[0].imageUrl}/>
                    </div>
                    <div>
                        <span>{feedData.content}</span>
                    </div>
                <div className="to_do feed_menu align_horzien">
                    <div>
                        <img className="main_icon_style" alt="heart_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className="main_icon_style" alt="comment_icon" src="./img/speech-bubble.png"/>
                        <img className="main_icon_style" alt="message icon" src="./img/plane.png"/>
                    </div>
                    <div>
                        <img className="main_icon_style" alt="bookmark" src="./img/bookmark.png"/>
                    </div>
                </div>
                <div className="to_do padding_10px ">
                    <div className="padding_10px">{feedData.like}</div>
                        <div className="feed_comment_list padding_10px">
                            {commentArray.map((comment) =>{
                                return <li key={comment.id}>
                                    <Comment 
                                        id = {comment.id}
                                        content = {comment.content}
                                        writer = {comment.username} 
                                        createdAt = {comment.createdAt || "2022-01-01"}
                                    />
                                </li>;

                            })}
                        </div>
                        <div>52분전</div>
        
                        <div>
                            <input 
                                className="comment_input" 
                                placeholder="댓글달기" 
                                ref = {value}
                                value = {inputState}
                                onChange = {e => setInput(e.target.value)}
                                onKeyDown = {onKeyDown}
                            />
                            <button className="posting_btn" onClick={addComment} >게시</button>
                        </div>
                    </div>
                </div>  
            </main>

        </div>
    )
}
export default Feed;
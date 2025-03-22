import React, { useState } from 'react';
import './CommentsSection.css';
import Comment from './Comment';
import { createComments } from '../../../../utils/strapi-cms';

const CommentsSection = ({ isOpen, comments, id, setCommentsOpen }) => {
    const [isCommentWrite, setIsCommentWrite] = useState(false);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [updatedComments, setUpdatedComments] = useState(comments);

    const postComment = async () => {
        try {
            await createComments(id, name, comment, comments);
            setName("");
            setComment("")
            setUpdatedComments([...updatedComments, {id, name, comment}])
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className='comments-section' style={isOpen ? {display: 'block'} : {display: 'none'}}>
            <div className='comments-header'>
                <h4>Comments({comments ? comments.length : 0})</h4>
                <svg onClick={() => setCommentsOpen(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" className="comments-close"><path d="M5 5l7 7m7 7l-7-7m0 0l7-7m-7 7l-7 7" stroke="currentColor" strokeLinecap="round"></path></svg>
            </div>
            <div className='comments-write-wrapper' onClick={() => setIsCommentWrite(true)}>
                {isCommentWrite ? (
                    <>
                        <input className='comments-write-name' onChange={(e) => setName(e.target.value)} value={name} placeholder='Write your name!' />
                        <textarea className='comments-write-content' onChange={(e) => setComment(e.target.value)} value={comment} placeholder='Write your thoughts!' />
                        <div className='comments-post-btn-wrapper'>
                            <button onClick={postComment} className='comments-post-btn' disabled={!name || !comment}>Post</button>
                        </div>
                    </>
                ) : <p>Share your thoughts...</p>}
            </div>
            <div className='comments-wrapper'>
                {updatedComments ? updatedComments.slice().reverse().map((comment, index) => (
                    <Comment comment={comment} key={index} />
                )) : ""}
            </div>
        </div>
    );
}

export default CommentsSection;

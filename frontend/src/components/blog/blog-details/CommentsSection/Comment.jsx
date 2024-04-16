import React from "react";
import './CommentsSection.css'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-header-profile">
            <img src="/images/blog/blog-details/user.png" width={40} height={40} />
        </div>
        <div className="comment-profile">
            <p className="comment-profile-name">{comment.name}</p>
            <p className="comment-date">{comment.commented_at ? new Date(comment.commented_at).toDateString()  : ""}</p>
        </div>
      </div>
      <p className="comment-body">
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;

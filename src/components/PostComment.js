import React from 'react';

function PostComment({ comment }) {
  return(
    <div className='comment' key={comment.id}>
      <img className='avatar' src={comment.author.avatar} />
      <p>
        <span>{comment.author.name}</span>
        {comment.content}
      </p>
    </div>
  )
}

export default PostComment;
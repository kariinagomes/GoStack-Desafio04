import React, { Component } from 'react';

import PostComment from './PostComment';

function PostItem({ post }) {
  return (
    /** Post */
    <div className='post-item'>
      {/* header */}
      <div className='post-header'>
        <img className='avatar' src={post.author.avatar} />
        <div className='details'>
          <span className='author'>{post.author.name}</span>
          <span>{post.date}</span> 
        </div>
      </div>
      {/* content */}
      <div className='post-content'> 
        <span>{post.content}</span>
      </div>
      {/* comments */}
      <div className='post-comments'>
        <div className='divider-comments'>
          {post.comments.map(comment =>(
            <PostComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostItem;
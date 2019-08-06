import React, { Component } from 'react';

import PostComment from './PostComment';

function PostItem({ post }) {
  return (
    /** Post */
    <div className='post-item'>
      {/* header */}
      <PostHeader author={post.author} date={post.date} /> 
      {/* content */}
      <div className='post-content'> 
        <span>{post.content}</span>
      </div>
      {/* comments */}
      <Comment post={post} />
    </div>
  );
}

function PostHeader({ author, date }) {
  return (
    <div className='post-header'>
      <img className='avatar' src={author.avatar} />
      <div className='details'>
        <span className='author'>{author.name}</span>
        <span>{date}</span> 
      </div>
    </div>
  );
}

function Comment({post}) {
  return (
    <div className='post-comments'>
      <div className='divider-comments' />
        {post.comments.map(comment =>(
          <PostComment key={comment.id} comment={comment} />
        ))}
    </div>
  );
}

export default PostItem;
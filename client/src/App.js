import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <div className='container'>
      <h1>Create Post!!!</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

import React from 'react';
import PostItem from './PostItem';
import { List } from '@mui/material';

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </List>
  );
};

export default PostList;

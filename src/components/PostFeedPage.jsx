import React, { useState, useEffect } from 'react';
import PostList from './PostList';


const samplePosts = [
  { id: 1, title: 'First Post', content: 'This is the first post content' },
  { id: 2, title: 'Second Post', content: 'This is the second post content' },
  // Add more sample posts here
];


const PostFeedPage = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // Fetch posts from an API or use a static list
  //   axios.get('/api/posts')
  //     .then(response => setPosts(response.data))
  //     .catch(error => console.error('Error fetching posts:', error));
  // }, []);
  useEffect(() => {
    
    setTimeout(() => {
      setPosts(samplePosts);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Post Feed</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default PostFeedPage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import PostFeedPage from './components/PostFeedPage';
import PostDetailsPage from './components/PostDetailsPage';
import CreatePostPage from './components/CreatePostPage';
import UserProfilePage from './components/UserProfilePage';
import NotFoundPage from './components/NotFoundPage';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post-feed" element={<PostFeedPage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

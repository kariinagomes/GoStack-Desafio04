import React from 'react';
import './App.css';

import Header from '../components/Header'
import PostList from '../components/PostList';

function App() {
  // Usar {} quando for variável
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
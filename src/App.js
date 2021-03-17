import React, { useState, useEffect } from 'react';
import './App.css';
import post from './Post';
import Post from './Post';
import { datab } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    datab.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
    })

  }, []);


  return (
  <div className="Application">

    <div className="header">

      <div className="Instafeed">
        <h1>Instafeed</h1>
      </div>

      <img className="app__headerImage" src="https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png" alt="" />

      <div className= "search">
      
      <input type="text" placeholder="Search.."/>
      </div>

    </div>

    {
      posts.map(({id, post}) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))
    }


  
  
  </div>
  );
}

export default App;

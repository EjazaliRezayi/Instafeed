import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
<div className="Application">
<div className="header">
    <div className="Instafeed">
      <h1>Instafeed</h1>
        </div>

    <div className= "search">
      
    <input type="text" placeholder="Search.."/>
  </div>
</div>
<Post />
</div>
  );
}

export default App;

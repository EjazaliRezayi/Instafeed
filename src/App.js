import React, { useState, useEffect } from 'react';
import './App.css';
import post from './Post';
import Post from './Post';
import { datab } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);


  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    datab.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
    })

  }, []);

 


  return (
  <div className="Application">

    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2> I am modal</h2>
      </div>
      
    </Modal>

    <div className="header">

      <div className="Instafeed">
        <h1>Instafeed</h1>
      </div>

      <img className="app__headerImage" src="https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png" alt="" />

      <div className= "search">
      
      <input type="text" placeholder="Search.."/>
      </div>

    </div>

    <Button onClick={}>
      Sign up
    </Button>


    {
      posts.map(({id, post}) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))
    }

  
  </div>
  );
}

export default App;

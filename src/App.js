import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
// add auth
import { datab, authentication } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button , Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';

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
  const [openSignIn, setOpenSignIn] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((authUser) => {
      if(authUser){
        // when user has logged in 

        console.log(authUser);
        setUser(authUser);

      }else{
        // when user loggs out

        setUser(null);
      }

      })
      return () => {

        unsubscribe();
      }

  }, [user, username]);
  
  useEffect(() => {
    datab.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({id: doc.id, post: doc.data()})));
    })

  }, []);

 const signUp = (event) => {
   event.preventDefault();

   authentication.createUserWithEmailAndPassword(email, password)
   .then((authUser) => {
    return authUser.user.updateProfile({
       displayName: username
     })
   })
   //back end validation
   .catch((error) => alert(error.message));

   setOpen(false);

 }
const signIn = (event) => {
  event.preventDefault();

  authentication.signInWithEmailAndPassword(email, password)
  .catch((error) => alert(error.message));

  setOpenSignIn(false);

}

  return (
  <div className="Application">
    
    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <div style={modalStyle} className={classes.paper}>
        <form className = "SignUp">
        <center>
                <img 
                className="app__headerImage"
                src="https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png" 
                alt="" />
        </center>

                <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />



                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button type ="submit" onClick={signUp}>Sign Up</Button>
         
         </form>
      </div>
      
    </Modal>

    <Modal
      open={openSignIn}
      onClose={() => setOpenSignIn(false)}
    >
      <div style={modalStyle} className={classes.paper}>
        <form className = "SignIn">
        <center>
                <img 
                className="app__headerImage"
                src="https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png" 
                alt="" />
        </center>

            
                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button type ="submit" onClick={signIn}>Sign In</Button>
         
         </form>
      </div>
      
    </Modal>


    <div className="header">

      <img className="app__headerImage" src="https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png" alt="" />
      <div className="Instafeed">
        <h1>Instafeed</h1>
      </div>
      <div className= "search"> 
        <input type="text" placeholder="Search.."/>
      </div>

      { user ? (
          <Button onClick={() => authentication.signOut()}> Logout </Button>
        ): (
          <div className="logginContainer">
            <Button onClick={() => setOpenSignIn(true)}> Sign In </Button>
            
            <Button onClick={() => setOpen(true)}> Sign up </Button>
          </div>
        
        )
      }
    </div>

    <div className="app_posts">
      <div>
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
        }
      </div>
    </div>


    {user?.displayName ? (
      <ImageUpload username= {user.displayName} />
    ): (
      <h3>You need to login to upload</h3>
    )}

  
  </div>
   );
}

export default App;

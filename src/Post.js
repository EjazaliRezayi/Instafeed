import React, { useState, useEffect } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { datab } from './firebase';
import firebase from 'firebase';
import Like from './Like';

function Post({ postId, username, user, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
   


    const onFollow =(event) =>{
        event.preventDefault();
        // username -> is the username of the user that posted the pic
        datab.collection("following").doc(user.displayName).collection("userFollowing").add({
             Isfollowing: username , Username: user.displayName 
        });
        

    }


    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = datab
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();
        datab.collection("posts").doc(postId).collection("comments").add({
            text: comment, username: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }
    
    return (
    
    <div className ="post">
        { /* this part is the header of the user and username*/ }

        <div className ="Post_header">
            <Avatar
                className="Post_Avatar"
                alt='ChristianeTayar'
                src="/static/images/avatar/1.jpg"
            />
            <h3> {username} </h3>
            <button className="Post_follow" type="button" onClick={onFollow}>
     
                    Follow user
            </button>
        </div>

            {/* insert picture*/}
            <img className="Post_pic" 
            src={imageUrl}
            alt="" 
            />

            <Like>

            </Like>
            
            {/* underneath the image -> username and caption*/}
            <h4 className= "Post_text" ><strong> {username} </strong> {caption} </h4>


            {/*show all comments*/}
            <div className="Post_comments">
                {comments.map((comment) => (
                <p><strong><i>{comment.username}</i></strong> {comment.text} </p>
                ))}
            </div>


            {/*comment section over here */}
            <form className="Post_commentbox">

                <input className="Post_input" type="text" placeholder="Add COMMENTS!" value={comment} onChange={(e) => setComment(e.target.value)} /> 
                <button disabled={!comment} className="Post_button" type="submit" onClick={postComment}>
                    Submit Comment
                </button>

            </form>
            

            
    </div>
    )
}

export default Post


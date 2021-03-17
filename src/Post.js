import React from 'react';
import Post from './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post( { username, caption, imageUrl } ) {
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
        </div>

            {/* insert picture*/}
            <img className="Post_pic" 
            src={imageUrl}
            alt="" 
            />

            {/* underneath the image -> username and caption*/}
            <h4 className= "Post_text" ><strong> {username} </strong> {caption} </h4>
    </div>
    )
}

export default post


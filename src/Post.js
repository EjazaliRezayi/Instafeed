import React from 'react';
import Post from './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post() {
    return (
    
    <div className ="post">

        { /* this part is the header of the user and username*/ }
        <div className ="Post_header">
            <Avatar
                className="Post_Avatar"
                alt='ChristianeTayar'
                src="/static/images/avatar/1.jpg"
            />
            <h3> Username</h3>
        </div>
            {/* insert picture*/}
            <img className="Post_pic" 
            src=" https://user-images.githubusercontent.com/59893406/109395744-0374a580-78fc-11eb-81bd-fb7197ff13ba.png"
            alt="" 
            />

            {/* underneath the image -> username and caption*/}
            <h4 className= "Post_text" ><strong>christianetayar</strong> Great! </h4>
    </div>
    )
}

export default post


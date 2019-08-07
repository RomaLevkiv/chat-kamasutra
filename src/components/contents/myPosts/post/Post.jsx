import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.post}>
                <br/>
              <div>
                  {props.name}
              </div>
              <img src={props.img}/> {props.userName} 
            </div>

        </div>
    );
}

export default Post;
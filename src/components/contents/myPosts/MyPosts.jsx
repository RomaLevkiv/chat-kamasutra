import React from "react";
import classes from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    let count = 0;
    
    return (
        <div>
            <div>
                My posts
            </div>
             
            <Post name={`Post ${++count}`} img="https://tgram.ru/wiki/bots/image/tnull_bot.jpg" userName="Roma" />
            <Post name={`Post ${++count}`} img="https://droidoff.com/sites/default/files/downloads/title-2016/unnamed_348.png" userName="Sergiy" />
            <Post name={`Post ${++count}`} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_tiocEIWQpJ9LXz9gmgEuWDqPie6dUKM26HLE7swaB_hxH8J" userName="Kolya" />
        </div>
    );
}

export default MyPosts;
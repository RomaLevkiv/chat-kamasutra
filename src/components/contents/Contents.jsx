import React from "react";
import classes from './Contents.module.css';
import MyPosts from "./myPosts/MyPosts";

const Contents =()=>{
    return(
        <div className={classes.content}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam explicabo, accusamus molestias laborum ut libero tenetur cupiditate, id itaque iure dolorum. Inventore dolore autem quasi adipisci distinctio laudantium cum?</p>
            <img className={classes.img} src="https://www.designfreelogoonline.com/wp-content/uploads/2019/02/000649-lions-01.png"/>
            <MyPosts/>
        </div>
        
    );
}

export default Contents;
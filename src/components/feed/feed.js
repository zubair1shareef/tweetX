import React from 'react'
import style from './style.module.scss'



import { Link } from "react-router-dom";



const Navbar=()=>{
  return(
    <div className={style.navbar}>
    <div className={style.title}>
      <p>TweetX</p>
    </div>

    <div className={style.links}>
    <Link className={style.link} style={{color:'#ff748d'}} to="/feed">Feed</Link>
    <Link className={style.link} to="/users">user</Link>
    <Link className={style.link} to="/profile">profile</Link>
     
     
    </div>
  </div>
  )
}
const Post=()=>{
    return (
        <div className={ style.post}>

            <img src="data:image/jpeg;base64,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" alt="" />
            <div className={style.post_data}>
                <p className={style.name}>zubiar</p>
                <p className={style.description}>dustry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type specimen book. It has survived no

                 t only five centuries, but also the leap into electronic typesetting, remaining essentially unch
                 anged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p
                ublishing software like Aldus PageMaker including versions of Lorem Ip</p>
            </div>
            <div className={style.icon}>

</div>
        </div>
    )
}

const feed = () => {
  return (
    <div className={style.container}>
     <Navbar/>

        <div className={style.posts}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        </div>
        


  </div>
  
  )
}

export default feed
import React from 'react'
import style from './style.module.scss'
import { Link } from "react-router-dom";
function login() {
  return (
    <div className={style.container}>
        <div className={style.title}>
            <p className={style.name}>TweetX</p>
           
            <Link to="/signup"> <button className={style.create_account}>Create Account</button></Link>

        </div>

        <div className={style.main}>
            <div className={style.Left}>
                <h1>Login</h1>
                <div className={style.form}>
                    <input type="text" placeholdeR='Email' />
                    <input type="password" placeholdeR='Password' />
                    <div className={style.controlers}>
                        <p>Forgot Password</p> <button ><Link to="/feed"> <button className={style.create_account}>Login</button></Link></button>
                        
                        
                    </div>
                </div>
                 
            </div>


            <div className={style.Right}>
               
            </div>

         </div>




    </div>
  )
}

export default login
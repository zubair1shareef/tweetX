import React from 'react'
import style from './style.module.scss'
import { Link } from "react-router-dom";
function signup() {
  return (
    <div className={style.container}>
        <div className={style.title}>
            <p className={style.name}>TweetX</p>
          
            <Link to="/"> <button className={style.create_account}>Login</button></Link>

        </div>

        <div className={style.main}>
            <div className={style.Left}>
                <h1>Create Account</h1>
                <div className={style.form}>
                    <input type="text" placeholdeR='Name' />
                    <input type="text" placeholdeR='Email' />
                    <input type="password" placeholdeR='Password' />
                    <input type="password" placeholdeR='Confirm Password' />
                    <div className={style.controlers}>
                        <p>Forgot Password</p> <button>Sign up</button>
                    </div>
                </div>
                 
            </div>


            <div className={style.Right}>
               
            </div>

         </div>




    </div>
  )
}

export default signup
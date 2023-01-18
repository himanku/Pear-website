import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { InputControl } from '../../Components/InputControl/InputControl'
import styles from '../Login/login.module.css'
export const Login = () => {
  const [admin , setAdmin] = useState({
    email1: 'abhishek1337Chatterjee@gmail.com',
    password1: 123456,
  })
  return (
    <div >
      <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>
            Sign in to Apple Store
        </h1>
        <InputControl label="Email" type="email" placeholder = "Enter Email Address" />
        <InputControl label="Password" type="password" placeholder = "Enter Your Password" />


        <div className={styles.footer}>
          <button>Login</button>
          <p>
            Already have an account ? <span>
              <Link to='/signup'>Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

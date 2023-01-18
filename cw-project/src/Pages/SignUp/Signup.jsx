import React, {useState} from "react";
import { Link } from "react-router-dom";
import { InputControl } from "../../Components/InputControl/InputControl";
import { useNavigate} from 'react-router-dom'
import styles from "../SignUp/Signup.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {auth} from '../../firebase'

export const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = ()=> {
    if(!values.name || !values.email || !values.password){
      setError("Fill all fields");
      return;
    }
    setError("");
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth, values.email, values.password).then(res=>{
      setSubmitButtonDisabled(false);
      const user = res.user;
      updateProfile(user,{
        displayName:values.name,
      })
      console.log(res);
    }).catch((err)=>{
      setSubmitButtonDisabled(false);
      setError('User Exist')
    })

  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Sign Up to Apple Store</h1>
          <InputControl
            label="Name"
            placeholder="Enter your name"
            type="text"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter your email address"
            type="email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className={styles.footer}>
            <b className={styles.error}>{error}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmit}>Sign Up</button>
            <p>
              Already have an account ?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../../Components/InputControl/InputControl";
import styles from "../Login/login.module.css";

import { auth } from "../../firebase";
export const Login = () => {
  const [admin, setAdmin] = useState({
    email1: "abhishek1337Chatterjee@gmail.com",
    password1: 123456,
  });
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setError("Fill all fields");
      return;
    }
    setError("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        // navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setError('Check Email and the password');
      });
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Sign in to Pear Store</h1>
          <InputControl
            label="Email"
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className={styles.footer}>
            <b className={styles.error}>{error}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmit}>
              Login
            </button>
            <p>
              Not have an account ?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

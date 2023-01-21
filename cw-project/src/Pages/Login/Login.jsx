import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { InputControl } from "../../Components/InputControl/InputControl";
import styles from "../Login/login.module.css";
import logo from "../../assets/pear_light.png"
import { Image } from "@chakra-ui/react";
import {GoogleButton} from 'react-google-button'
import { loginInitiate } from "../../Redux/Authentication/action";

export const Login = () => {
  const [admin, setAdmin] = useState({
    email1: "abhishek1337Chatterjee@gmail.com",
    password1: 123456,
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const currentUser = useSelector((store) => {
    // console.log(store.auth.currentUser);
    return store.auth.currentUser;
  })


  const btnDisable = useSelector((store) => {
    // console.log(store.auth.btnDisabled);
    return store.auth.btnDisabled
  })

  const Error = useSelector((store) => {
    // console.log(store.auth.error);
    return store.auth.error;
  })
const dispatch = useDispatch();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const [error, setError] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setError("Fill all fields");
      return;
    }
    setError("");
   dispatch(loginInitiate(values.email, values.password));
   signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        alert('Sign In Successfully');
         navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <div className={styles.container}>
      <video autoPlay muted className={styles.videoPlay} loop>
          <source src="https://www.apple.com/105/media/us/ipad-10.9/2022/4c5d6d90-d0de-429a-84f7-cf8827181a11/anim/features/large_2x.mp4"
          type="video/mp4"
          />
        </video>
        <div className={styles.innerBox}>
          <Image src={logo} w="100px" margin="auto"/>
          <h1 className={styles.heading}>Log in to Pear Store</h1>
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
            <b className={styles.error}>{error===''? Error : error}</b>
            <button disabled={btnDisable} onClick={handleSubmit}>
              Login
            </button>
            <GoogleButton className={styles.google}/>
            <p>
              Don't have an account ?{" "}
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputControl } from "../../Components/InputControl/InputControl";
import { useNavigate } from "react-router-dom";
import styles from "../SignUp/Signup.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import logo from "../../assets/pear_light.png"
import {auth} from '../../firebase'
import { Image } from "@chakra-ui/react";
import { GoogleButton } from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../../Redux/Authentication/action";


export const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const currentUser = useSelector((store) => {
    // console.log(store.auth.currentUser.displayName);
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

  useEffect(()=>{
    if (currentUser){
      alert("SignUp Successfully");
      navigate('/login');
    }
  },[currentUser, navigate])
  const [error, setError] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = () => {
    if (!values.name || !values.email || !values.password) {
      setError("Fill all fields");
      return;
    }
    setError("");
    dispatch(registerInitiate(values.email, values.password, values.name));
  };
  return (
    <div>
      <div className={styles.container}>
        <video width="100%" autoPlay muted className={styles.videoPlay} loop>
          <source
            src="https://www.apple.com/105/media/us/ipad-10.9/2022/4c5d6d90-d0de-429a-84f7-cf8827181a11/anim/features/large_2x.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.innerBox}>
          <Image src={logo} w="100px" margin="auto"/>
          <h1 className={styles.heading}>Sign Up to Pear Store</h1>
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
            <b className={styles.error}>{error===''? Error : error}</b>
            <button disabled={btnDisable} onClick={handleSubmit}>
              Sign Up
            </button>
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

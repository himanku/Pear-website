import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOutInitiate } from '../Redux/Authentication/action';
export const Home1 = () => {
  const currentUser = useSelector((store) => {
    // console.log(store.auth.currentUser.displayName);
    return store.auth.currentUser;
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOutInitiate)
  }
  
  return (
    <div>
      <h1></h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

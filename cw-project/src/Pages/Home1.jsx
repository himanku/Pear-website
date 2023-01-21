import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOutInitiate } from '../Redux/Authentication/action';
import {auth} from '../firebase'
import { setUser } from '../Redux/Authentication/action'

export const Home1 = () => {
  const currentUser = useSelector((store) => {
    // console.log(store.auth.currentUser.displayName);
    return store.auth.currentUser.displayName;
  })

  const dispatch = useDispatch();
  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      if (authUser){
        dispatch(setUser(authUser))
      }else {
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOutInitiate)
  }
  
  return (
    <div>
      <h1>{currentUser}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

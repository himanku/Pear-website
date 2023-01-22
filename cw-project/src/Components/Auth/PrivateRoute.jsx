import React from 'react'
import {useSelector} from 'react-redux'
import { LoginToRedirect } from './LoginToRedirect';
import {Navigate} from 'react-router-dom'
export const PrivateRoute = ({children}) => {
    const currentUser = useSelector((store) => {
        return store.auth.currentUser;
      })
      // return currentUser ? children : <LoginToRedirect/>;
      if(currentUser){
        if(currentUser?.email === 'abhishek1337chatterjee@gmail.com'){
            return children;
        }else if(currentUser?.email === 'himanku@gmail.com'){
          return children;
        }
      }
    return   <LoginToRedirect/>
}

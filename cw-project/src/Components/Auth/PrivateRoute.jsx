import React from 'react'
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { LoginToRedirect } from './LoginToRedirect'
export const PrivateRoute = ({children}) => {
    const currentUser = useSelector((store) => {
        // console.log(store.auth.currentUser);
        return store.auth.currentUser;
      })
      return currentUser ? children : <LoginToRedirect/>;
}

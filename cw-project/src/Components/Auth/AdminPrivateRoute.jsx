import React from 'react'
import {useSelector} from 'react-redux'
import { LoginToRedirect } from './LoginToRedirect'
export const AdminPrivateRoute = ({children}) => {
    const currentUser = useSelector((store) => {
        // console.log(store.auth.currentUser);
        return store.auth.currentUser?.email;
      })
      return currentUser === 'abhishek1337chatterjee@gmail.com' || 'himanku@gmail.com' ? children : <LoginToRedirect/>;
}

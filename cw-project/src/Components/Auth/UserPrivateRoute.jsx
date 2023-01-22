import React from 'react'
import {useSelector} from 'react-redux'
import { LoginToRedirect } from './LoginToRedirect'
export const UserPrivateRoute = ({children}) => {
    const currentUser = useSelector((store) => {
        // console.log(store.auth.currentUser);
        return store.auth.currentUser;
      })

      return currentUser  ? children : <LoginToRedirect/>
}

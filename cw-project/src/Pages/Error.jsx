import { Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import error from '../../src/assets/error.png'
export const Error = () => {
  return (
    <div>
        <Navbar/>
        <Image margin='auto' mt='20px' w='100%'  src={error}/>
    </div>
  )
}

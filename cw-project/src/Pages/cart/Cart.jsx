import { Button, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Cart = () => {
    const [data,setData]=React.useState([]);

    const getData = async() =>{
        let res=await axios.get("http://localhost:8080/cart");
        return res.data
      }

      const navigate=useNavigate()
    
      React.useEffect(() => {
        getData().then((res)=>setData(res))
      }, []);

  return (
    <div>
        {
            data.length===0 ?<div>
                <Heading as={"h2"} size="2xl">Your bag is empty.</Heading>
                <p>Sign in to see if you have any saved items. Or continue shopping.</p>
                <Button onClick={()=>navigate("/login")}>Sign In</Button>
                <Button onClick={()=>navigate("/")}>Continue Shopping</Button>
            </div>:
            <div>
                {data.length>0&&data.map((ele,i)=>{
                    return (
                        <div>
                            <Image src={ele.image} alt="" />
                        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default Cart
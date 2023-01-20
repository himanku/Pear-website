import { Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../Redux/AdminIpad/action';
import Items from './Items';

const ShowDataIpad = () => {
    const tasks = useSelector((store) =>store.AdminReducerIpad.tasks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks())
        console.log(tasks)
    },[dispatch])
    return (
      <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}} gap="30px" mt="50px">
        {tasks.length>0 && tasks.map((item) => {
          return <Items key={item.id} {...item}/>
        })}
      </Grid>
    );
}

export default ShowDataIpad
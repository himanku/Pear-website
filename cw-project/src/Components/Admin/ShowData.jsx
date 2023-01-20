import { Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../Redux/AdminIpad/action';
import Items from './Items';

const ShowData = () => {
    const tasks = useSelector((store) =>store.tasks);
    const dispatch = useDispatch();
    useEffect(() => {
      if(tasks.length === 0) {
        dispatch(getTasks())
        console.log(tasks)
      }
    },[dispatch, tasks.length])
    return (
      <Grid templateColumns={"repeat(2, 1fr)"} gap="30px" mt="50px">
        {tasks.length>0 && tasks.map((item) => {
          return <Items key={item.id} {...item}/>
        })}
      </Grid>
    );
}

export default ShowData
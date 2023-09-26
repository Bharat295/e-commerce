import React, { useEffect, useState } from 'react'
import { getallData } from '../service/api';
import {Grid}from '@mui/material';
import CardData from './CardData';

export default function Home({type}) {
    const [data, setData] = useState();
    const getData = async () => {
        const response = await getallData(type);
        setData(response.data.products);
        // console.log(data);
    }

    useEffect(() => {
        getData();
    }, [type]);

    return (
        <div> 
            <Grid container spacing={4} padding='30px'
            >
                {
                    data && data.map((item) =>  {
                   return <Grid item xs = {3} key={item.id}  >
                
                       
                       <CardData data={item}
                                 category = {type}
                       />
                        
                    </Grid> 
                    })
                } 
      </Grid>
           


    </div>
  )
}

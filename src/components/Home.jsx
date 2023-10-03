import React, { useEffect, useState } from 'react'
import { getallData } from '../service/api';
import {Grid}from '@mui/material';
import CardData from './CardData';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Home({ type }) {
    const [data, setData] = useState();
    let { category } = useParams();
    category = "" || type;
    console.log(category);
    
    const getData = async () => {
        const response = await getallData(category);
        setData(response.data.products);
        // console.log(data);
    }

    useEffect(() => {
        setData();
        getData();
    }, [category]);

    return (
 
        <>
            {
                data ?
                    <Grid container spacing={4} padding='30px'
                >
                     <ToastContainer/>
                    {
                        data && data.map((item) => {
                            return <Grid item xs={3}  key={item.id}  >
                
                       
                                <CardData data={item}
                                    category={category}
                                />
                        
                            </Grid>
                        })
                    }
                    </Grid>
                    : <Loader/>
            }
        
    </>
        
        
  )
}

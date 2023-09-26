import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getallData } from '../service/api';
import { Grid } from '@mui/material';
import CardData from './CardData';

export default function CategoryData() {
  const { id, category } = useParams();
  const [data, setData] = useState();
    const getData = async () => {
        const response = await getallData(category);
        const currData = response.data.products;
        // setData(response.data.products);
      const d = currData.filter((val) => {
        return val.id == id
      });
   
    }

    useEffect(() => {
        getData();
    },[]);
  return (
    <div>
      
                       {/* <CardData data={data}
                                 category = {category}
                       /> */}
                        
               
    </div>
  )
}

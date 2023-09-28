import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getallData } from '../service/api';
import { Button, Grid, Stack, Typography } from '@mui/material';
 

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
      setData(d); 
      console.log(d);
    }
    useEffect(() => {
        getData();
    }, []);
  
    const fun = (item) => {
      return <Stack key={item.name} direction="row" gap="24px" alignItems="center">
        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
          <img src={item.icon} alt={'sf'} style = {{width: '50px' , height:'50px'}}/>
        </Button>
  
        <Typography textTransform="capitalize" variant='h6'>
          {item.name}
        </Typography>
         
       </Stack>
    }
    return (
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src = {'gifUrl'} alt = {'name'} loading = "lazy" className='detail-image'/>
        <Stack sx = {{gap: {lg: '35px' , xs: '20px'}}}>  
          <Typography variant='h3' textTransform= "capitalize">
            {'name'}
          </Typography>
          <Typography variant='h6'>
            This is card view .<span style={{color: '#ff2625' , textTransform: 'capitalize'}}> {'name'} </span> {' '}
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam nihil nostrum doloribus blanditiis hic optio mollitia, assumenda fugit veritatis numquam. Praesentium architecto excepturi labore molestias aut natus repellat laboriosam.
          </Typography>
          {/* {extraDetail.map( fun)} */}
         </Stack>
      </Stack>
    )
}

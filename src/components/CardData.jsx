import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ImageLoader from './ImageLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
export default function CardData({ data , category }) {
  const t = {
    "id": 27,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    "images": [
        "https://i.dummyjson.com/data/products/27/1.jpg",
        "https://i.dummyjson.com/data/products/27/2.jpg",
        "https://i.dummyjson.com/data/products/27/3.jpg",
        "https://i.dummyjson.com/data/products/27/4.jpg",
        "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    ]
  }

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  
  const notify = () => toast.success("Item Added");
   

  return (
   
    <div sx={{ maxWidth: 345 }} xs={{
        height: 400,
    
      }} key={data.id}
        className='card'
        
    >

      <div style={{
    width: '100%',
    height: '250px',
        overflow: 'hidden',
     
      }}>
         {loading && <ImageLoader/>}
          <img
            src={data.thumbnail}
            alt=""
            onLoad={handleImageLoad}  
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            />
           
</div>
      <CardContent>
        <Typography variant="h5" component="div" 
        >
        {data.title.length > 20 ? data.title.substring(0,18) + '...' :data.title}
        </Typography>
         
      </CardContent>
      <CardActions >
        <div >{data.brand}</div>
        <div >{data.category}</div>
        </CardActions>
        
        <div style={{
          display:'flex',
        justifyContent: 'space-around',
          marginTop:'10px'
      }}>
          <button className='Cardbtn' onClick={notify}>Add to Cart</button>
        <Link to={`/category/${category}/${data.id}`}>
          <button className='Cardbtn' >See more</button>
        </Link>
         
      </div>

       
      <div style={{
        float: 'left',
        margin: '10px 20px',
        fontSize: '20px',
        fontWeight:'600'

      }}>price : ₹ {data.price}</div>

      </div>
      
  );
}
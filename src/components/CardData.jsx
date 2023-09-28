import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

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

  return (
   
    <Card sx={{ maxWidth: 345 }} xs={{
        height: 400,
    
      }} key={data.id}
        className='card'
        
    >
      <CardMedia
        component="img"
        alt="green iguana"
 
          image={data.thumbnail}
          style={{
            width: '100%',
            height: '250px',
            
            
          }}
      />
      <CardContent>
        <Typography  variant="h5" component="div">
          {data.title}
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
          <button className='Cardbtn'>Add to Cart</button>
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

      </Card>
      
  );
}
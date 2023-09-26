import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
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
   <Link to = {`/category/${category}/${data.id}`}>
    <Card sx={{ maxWidth: 345 }} xs={{
       height:344  
    }} key={data.id}
 
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {data.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
         
      </CardContent>
      <CardActions >
        <div >{data.brand}</div>
        <div >{data.category}</div>
        <Rating value={data.rating}/>
        
      </CardActions>
      </Card>
      </Link>
  );
}
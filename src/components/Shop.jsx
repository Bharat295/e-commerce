import { Fragment, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { Grid, Paper, Rating } from "@mui/material";
import ReactStars from "react-rating-stars-component";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'center',
}));
const Shop = () => {

    const data = {
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

    const [listSelected, setListSelected] = useState("desc");
    const [relatedProducts, setRelatedProducts] = useState([]);

    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handelAdd = (quantity) => {
        // addToCart(selectedProduct,quantity);
        toast.success("Product has been added to cart!");
    }
    
    return (
        <div>
        
            <Grid container  className="product-page">
                <Grid item xs={6}>
                    <img
                        src={data.thumbnail} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        
                        height: '100%',
                        width: '100%',
                      
                    }}>

                    <h2
                     style={{
                                fontSize: '30px',
                                fontFamily: 'system-ui - 500', 
                                marginLeft: '30px',
                                marginTop:'50px'
                      }}
                    > {data.title}</h2>
                    <div className="rate">
                    <Rating name="read-only" value={data.rating} readOnly />
                        <span>{data.rating} ratings</span>
                    </div>
                    <div className="info">
                        <span className="price">${data.price}</span>
                        <span style={{fontWeight:'600',fontSize:'20px'}}>Category:</span>{data.category}
                        </div>
                        <div className="description">
                         {data.description}

                        </div>
                          
                    <input className="qty-input" type="number" placeholder="Qty" value={quantity} />
                    
                        <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(quantity)}>Add To Cart</button>
                    </div>    
                   
                </Grid>
            </Grid>

        </div>

    );
}

export default Shop;
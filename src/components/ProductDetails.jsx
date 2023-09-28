
import { useParams } from "react-router-dom";
import { getallData } from "../service/api";

import { useEffect, useState } from "react";

import { Grid, Rating } from "@mui/material";
import { toast } from "react-toastify";
import Loader from "./Loader";

import CarouselDemo from "./CarouselDemo";


const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);
   
    const handelAdd = (quantity) => {
        // addToCart(selectedProduct,quantity);
        toast.success("Product has been added to cart!");
    }  
    
  const { id, category } = useParams();
  const [data, setData] = useState('');
    const getData = async () => {
        const response = await getallData(category);
        const currData = response.data.products;
        // setData(response.data.products);
      const d = currData.filter((val) => {
        return val.id == id
      });
        setData(d[0]); 
        console.log(data);  
    }
    useEffect(() => {
        getData();
    }, []);
  
   
 
    return ( 
        <>
            {
                data ? 
                <Grid container className="product-page">
                    <Grid item xs={6}>
                        <div className="displayImage">
                                <CarouselDemo images={data.images} />
                            
                        </div>
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
                                    marginTop: '80px'
                                }}
                            >{data.title}</h2>
                            <div className="rate">
                                <Rating name="read-only" value={data.rating} readOnly />
                                <span>{data.rating} ratings</span>
                            </div>
                            <div className="info">
                                <span className="price">${data.price}</span>
                                <span style={{ fontWeight: '600', fontSize: '20px' }}>Category:</span>{data.category}
                            </div>
                            <div className="description">
                                {data.description}

                            </div>
                      
                                <input className="qty-input" type="number" placeholder="Qty" value={quantity} />
                                <div>

                                    <button aria-label="Add" type="submit" className="Cardbtn add" onClick={() => handelAdd(quantity)}>Add To Cart</button>
                                    <button aria-label="Add" type="submit" className="Cardbtn add">Try on</button>
                                </div>     
                        </div>
               
                    </Grid>
                </Grid> :
                   <Loader/>
            }

    </>

    );
}

export default ProductDetails;
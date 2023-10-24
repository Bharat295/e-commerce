
import { useParams } from "react-router-dom";
import { getallData } from "../service/api";

import { useEffect, useState } from "react";

import { Grid, Rating } from "@mui/material";
import Loader from "./Loader";
import CarouselDemo from "./CarouselDemo";

// Import toastify css file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebcamPopup from "./WebcamPopup";

 

const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);
   
    const handelAdd = () => {
        console.log('click');
        // let cnt = quantity;
        // addToCart(selectedProduct,quantity);
        setQuantity(quantity + 1);
        // toast.success("Product has been added to cart!");
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
        // console.log(data);  
    }
    useEffect(() => {
        getData();
    }, []);
  
    const notify = () => toast.success("Item Added");
    const [showWebcamPopup, setShowWebcamPopup] = useState(false);

    const openWebcamPopup = () => {
      setShowWebcamPopup(true);
    };
  
    const closeWebcamPopup = () => {
      setShowWebcamPopup(false);
    };
    
    return ( 
        <>
        <ToastContainer />
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
                                <input className="qty-input" type="number" placeholder="1"  />
                                <div>
                                    <button aria-label="Add" type="submit" className="Cardbtn add" onClick={notify}>Add To Cart</button>
                                    <button aria-label="Add" type="submit"
                                        className="Cardbtn add" onClick={()=> toast.error("Feature is in Progress")}>Buy Now</button>
                                    {/* <button aria-label="Add" type="submit"
                                        className="Cardbtn add" onClick={openWebcamPopup} >Try on</button>
                                    {showWebcamPopup && <WebcamPopup handleClose={closeWebcamPopup} />} */}
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
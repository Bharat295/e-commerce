import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getallData } from "../service/api";


const ProductDetails = () => {
    
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



   
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
     
    return ( 
        <Fragment>
            
           
            <section className="product-page">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <img loading="lazy" src=
                                {data.thumbnail} alt="" 
                                style={{
                                    height: '400px',
                                    width:"300px"
                                }}

                                />
                        </Col>
                        <Col md={6}>
                            <h2>  {data.title} </h2>
                            <div className="rate">
                                <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                </div>
                                {/* <span>ratings</span> */}
                            </div>
                            <div className="info">
                                <span className="price"> Price: {data.price} </span>
                                <span>category: {data.category} </span>
                            </div>
                            <p> kkd </p>
                            <input className="qty-input" type="number" placeholder="Qty" value= {1} onChange={handleQuantityChange} />
                            <button aria-label="Add" type="submit" className="add"  >Add To Cart</button>
                        </Col>
                    </Row>
                </Container>
            </section>
             
            
        </Fragment>
    );
}

export default ProductDetails;
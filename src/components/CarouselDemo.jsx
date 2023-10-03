
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselDemo({ images }) {
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        }}>
            
                <Carousel
                    autoPlay = {true}
                    infiniteLoop={true}
                    showArrows={true}
                    showStatus={true}
                    stopOnHover={true}
                    interval={1500}
                    width={500}
                    dynamicHeight = {false}
                    
                    verticalSwipe = 'natural'
                >
                    {
                        images.map((val) => {
                            return <div>
                                <img src={val} alt="" />
                            </div>
                        })
                    }
 
                </Carousel>
 
        </div>
    )
}

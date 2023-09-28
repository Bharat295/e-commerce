import React from 'react'
import {Dna } from 'react-loader-spinner'
;
export default function Loader() {
    return (
      
    <div className='loader'>
   <Dna 
  visible={true}
  height="200"
  width="130"
  ariaLabel="dna-loading"
                wrapperStyle={{
                
                }}
                wrapperClass="dna-wrapper"
                
/>
    </div>
  )
}

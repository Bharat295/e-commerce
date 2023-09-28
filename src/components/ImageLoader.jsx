import React from 'react'
import { Puff } from 'react-loader-spinner'

export default function ImageLoader() {
  return (
    <div className='Imageloader'>
      <Puff
  height="80"
  width="80"
  radius={1}
  color="#8469db"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

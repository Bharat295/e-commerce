import React from 'react'

export default function Navbar({setType}) {
    return (
       
            
       <nav>
	 
		<label class="logo">My Store</label>
		<ul>
			 <li onClick={()=> setType('all')}>All</li>
			 <li onClick={()=> setType('smartphones')}>Smartphone</li>
			 <li onClick={()=> setType('laptops')}>Laptops</li>
			 <li onClick={()=> setType('skincare')}>Skincare</li>
			 <li onClick={()=> setType('womens-dresses')}>Dresses</li>
			 <li onClick={()=> setType('womens-jewellery')}>Jwellery</li>
			 <li onClick={()=> setType('mens-shirts')}>Shirts</li>
			 <li onClick={()=> setType('womens-shoes')}>Shoes</li>
			 <li onClick={()=> setType('mens-watches')}>Watch</li>
			 <li onClick={()=> setType('furniture')}>Furniture</li>
		</ul>
	      </nav>
         
    );
            
}

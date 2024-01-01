import React from 'react'

function ProductAdded() {
    const fetchFoods = async () => {
        try {
          const res = await fetch("http://localhost:3001/getFoods");
          const data = await res.json();
          setProductList(data.OrderLIstData);
          
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div>productAdded</div>
  )
}

export default ProductAdded
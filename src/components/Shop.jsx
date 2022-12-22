import React from 'react'
import { useSelector } from 'react-redux'

export const Shop = () => {
    const shopData = useSelector((store) => store.shop)
    console.log(shopData);
  return (
    <>
        <h2>OUR SHOP</h2>
        <h3>Cloth count: {shopData.cloth}</h3>
        <h3>Mobile count: {shopData.mobile}</h3>
    </>
  )
}

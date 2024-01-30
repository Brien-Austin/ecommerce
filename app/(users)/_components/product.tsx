"use client"
import { getproducts } from '@/actions/fetchProducts';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { useQuery } from 'react-query';
import ProductCard from './product-card';
interface ProductsProp {
  id : string
  name : string
  description : string
  imageUrl : string
  category : string

}

const Products = () => {
    const supabase = createClientComponentClient();
    
  const getProducts = async() =>{
    const products = await supabase.from('products').select();
    return products.data

  }

    const {data : products,error} = useQuery('fetch-products',getProducts)
    console.log(error)

  console.log(products)
  return (
    <div className='flex flex-wrap gap-6'>
    {products?.map((data,index)=>(
      <ProductCard key={index} id={data.id} name={data.name} description={data.description} imageUrl={data.imageUrl} category={data.category}/>
    ))}
    </div>
  )
}

export default Products
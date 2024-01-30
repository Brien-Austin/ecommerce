
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import {cookies} from 'next/headers'
import { getproducts } from '@/actions/fetchProducts'
import ProductCard from './_components/product'
import Products from './_components/product'

const App = () => {
 
  


  
  return (
    <>
 <Products/>
    </>
  )
}

export default App
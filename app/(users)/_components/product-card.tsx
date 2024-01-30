import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
interface Products {
    id : string
    name : string
    description : string
    imageUrl : string
    category : string
  
  }

const ProductCard = ({name,imageUrl,description,category} : Products) => {
  return (
   <div className="border relative  lg:w-1/5 sm:w-full lg:h-auto sm:h-auto rounded-md">
    <div className='relative w-full h-48 p-1 rounded'> 
    <Image unoptimized={true}  className='object-cover w-4/5 p-1 rounded-md' fill src={imageUrl} alt={name}/></div>
    
    <div className='p-2'>
       <div className="flex items-center justify-between">
       <h1 className='text-sm truncate'>{name}</h1>
       <h1 className='text-xs px-2 rounded-full py-1 bg-green-200 text-green-700 whitespace-nowrap'>{category}</h1>
       </div>
        <h1 className='text-muted-foreground text-xs truncate'>{description}</h1>
        <Button className='w-full mt-2'> 
            Add to cart 
        </Button>

    </div>
   </div>
  )
}

export default ProductCard
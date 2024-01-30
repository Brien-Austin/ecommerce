"use client"
import React, { useState } from 'react'
import Logo from './logo'
import {cookies} from 'next/headers'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import CategoryHover from './navbar-items'
import {Clock2, Send, Shapes, ShoppingCart, Sparkles, User, View} from 'lucide-react'
import NavBarItems from './navbar-items'
import { useQuery } from 'react-query'

const navRoutes = [
 
 
  {
    name: 'Featured',
    icon: Sparkles, // Replace with the actual Lucid Icon name
    link: '/featured',
  },
  {
    name: 'New Arrivals',
    icon: Clock2, // Replace with the actual Lucid Icon name
    link: '/new-arrivals',
  },
  {
    name: 'Contact Us',
    icon: Send, // Replace with the actual Lucid Icon name
    link: '/contact',
  },
  {
    name: 'Cart',
    icon: ShoppingCart, // Replace with the actual Lucid Icon name
    link: '/cart',
  },
  {
    name: 'Login',
    icon: User, // Replace with the actual Lucid Icon name
    link: '/login',
  },
];



const NavBar = () => {

  const [categoriesData,setCategories] = useState()
  const supabase = createClientComponentClient()
 
  const fetchCategories = async() =>{
    const categories = await supabase.from('categories').select();
    return categories.data

  }

  const {data,error} = useQuery('fetch-categories',fetchCategories)
  console.log(data)
  return (
   <div className=' w-full h-20 border-b flex justify-between items-center px-10'>
    <div className=''>
    <Logo/>

    </div>
    <div className='flex items-center gap-10 '>
      {
        navRoutes.map((data,index)=>(
          <NavBarItems key={index} name={data.name} icon={data.icon} link={data.link} />
        ))
      }
      
     
     


    </div>

   </div>
  )
}

export default NavBar
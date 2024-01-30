"use client"
import { useAuthState } from '@/store/auth'
import { LucideIcon, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useStore } from 'zustand'
interface MobileNavBarItemProps {
    name : string,
    icon : LucideIcon,
    link : string
  }
const MobileNavItems = ({icon:Icon,name,link} : MobileNavBarItemProps) => {
  const {email,photoUrl} = useStore(useAuthState,(state)=>state)
  console.log(photoUrl)
  
  return (<>
    {
    name === 'Account' 
    ? 
    (
       <> 
       <Link href={link} className="flex flex-col items-center gap-1">
       <div className='h-9  w-9 rounded-full bg-slate-100 flex justify-center items-center text-slate-400'>
     {photoUrl ?  ( <>
      <Image className='h-8 w-8 rounded-full' src={photoUrl}alt='image' width={50} height={50}/></>) : ( <>
      <User size={16}/> </>)}   {/**/}
       
       </div>
      
    </Link> 

       </>
       ) 
       : 
       
       ( <>
      <Link href={link} className="flex flex-col items-center gap-1">
        <Icon size={16}/>
        <h1 className='text-xs'>{name}</h1>
    </Link> </>) 
    }
  
    </>
  )
}

export default MobileNavItems
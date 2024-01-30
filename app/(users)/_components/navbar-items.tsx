import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface NavBarItemProps {
  name : string,
  icon : LucideIcon,
  link : string
}
const NavBarItems = ({icon:Icon,name,link} : NavBarItemProps) => {
  return (
   <Link href={link} className='flex gap-3 items-center px-3 py-2 rounded-md hover:bg-yellow-100/80'>
    <Icon size={15}/>
   <h1 className='text-sm'> {name}</h1>

   </Link>
  )
}

export default NavBarItems
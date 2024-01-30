import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface MobileNavBarItemProps {
    name : string,
    icon : LucideIcon,
    link : string
  }
const MobileNavItems = ({icon:Icon,name,link} : MobileNavBarItemProps) => {
  return (
    <Link href={link} className="flex flex-col items-center gap-1">
        <Icon size={16}/>
        <h1 className='text-xs'>{name}</h1>
    </Link>
  )
}

export default MobileNavItems
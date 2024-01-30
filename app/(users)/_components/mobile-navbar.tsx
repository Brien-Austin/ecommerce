
import { Heart, Home, LucideIcon, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import MobileNavItems from './mobile-nav-items'
const mobileNav = [
    {
        name : 'Home',
        icon : Home,
        link : '/'
    },
    {
        name : 'Wishlist',
        icon : Heart,
        link : '/wishlists'
    },
    {
        name : 'Cart',
        icon : ShoppingCart,
        link : '/cart'
    },
    {
        name : 'Account',
        icon : User,
        link : '/profile'
    }

]


const MobileNavBar = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full'>
        <div className='px-5 py-2 w-full '>
            <div className='bg-slate-50/80 h-14 w-full rounded-full flex px-5 gap-10 justify-center items-center'>
                {
                    mobileNav.map(((data,index)=>(
                        <MobileNavItems key={index} name={data.name} icon={data.icon} link={data.link}/>
                        
                    )))
                }

            </div>
            
        </div>
    </div>
  )
}

export default MobileNavBar
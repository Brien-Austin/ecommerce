'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
export async function getproducts() {
    try {
     
    const supabase =  createServerActionClient({cookies})
    const products =  await supabase.from('products').select();
    return products;
        
    } catch (error) {
        console.log(error)
        
    }


}
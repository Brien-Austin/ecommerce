'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
export async function AddProduct(name : string) {
    try {
     
    const supabase =  createServerActionClient({cookies})
    const {data , error} = await supabase.from('product').insert([
        {
            name
        }
    ])
    console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }


}
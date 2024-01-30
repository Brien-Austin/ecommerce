'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import NameForm from "./NameForm"



type Props = {
  id : number
  name : string
   
}

export const ProductsTable = ({id , name} : Props) => {
  const router = useRouter();

  const supabase= createClientComponentClient();
  useEffect(()=>{
    const channel = supabase.channel('realtime products').on('postgres_changes',{
      event : '*',
      schema : 'public',
      table : 'product'
    }, () =>{
      router.refresh()
    }).subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  })
  return (
    <>

  
    {name}
    
    </>
  )
}
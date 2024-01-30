"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    const [user , setUser] = useState()
    const supabase = createClientComponentClient()

    useEffect(()=>{
            get_user_session();
    })

    async function get_user_session(){
        const {data , error} = await supabase.auth.refreshSession();
        const {session , user} = data;
        console.log(user)
      

    }
  return (
    <div>Welcome to the app</div>
  )
}

export default Welcome
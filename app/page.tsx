'use client'
import { Button } from '@/components/ui/button';
import { useAuthState } from '@/store/auth';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useStore } from 'zustand';

const App = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  
  const loggedin = useStore(useAuthState,(state)=>state.isLoggedIn)
  const onClick =async ()=>{
    try {
      const {data , error} = await supabase.auth.signInWithOAuth({
        provider : 'google',
        options : {
          redirectTo : 'api/auth/callback'
        }
      })

      
    } catch (error) {
      console.log(error)
      
    }
    finally{

    }

  }
  return (
    <div>App
      {loggedin ? ( <>
    
      
      </>) : ( <>
        <Button onClick={onClick}>
        Continue with google
      </Button>
       </>)}
    
    </div>
  )
}

export default App
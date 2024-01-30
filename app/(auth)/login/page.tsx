"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react'
import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from 'zustand';
import { useAuthState } from '@/store/auth';
interface IdentityData {
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    phone_verified: boolean;
    picture: string;
    provider_id: string;
    sub: string;
  }
  
  interface UserIdentity {
    id: string;
    user_id: string;
    identity_data?: {
      [key: string]: IdentityData;
    };
    identity_id: string;
    provider: string;
    created_at?: string;
    last_sign_in_at?: string;
    updated_at?: string;
  }

const Login  = () => {
    const [data, setData] = useState<UserIdentity[]>([]);
    const [userEmail, setUserEmail] = useState<string | undefined>();
    
    const supabase = createClientComponentClient();
    const authState = useStore(useAuthState,(state)=>state)
    const fetchUser = useCallback(async () => {
        try {
          const response = await supabase.auth.getUserIdentities();
          console.log(response?.data?.identities);
          setData(response?.data?.identities || []);
          if (response?.data?.identities) {
            authState.setLogin();
          }
        } catch (error) {
          console.error(error);
        }
      }, [supabase, authState]);
      

      useEffect(() => {
        const fetchData = async () => {
          await fetchUser();
        };
    
        fetchData();
      }, [fetchUser]);

      if(data){
        console.log(authState.isLoggedIn)
        authState.setLogin()
        console.log(authState.isLoggedIn)

        console.log('authenticated')
      }
  return (
    <div className="max-w-[400px] mx-auto px-2">
                <Auth
                    onlyThirdPartyProviders
                    redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`}

                    supabaseClient={supabase}
                    providers={['google']}
                    appearance={{theme: ThemeSupa}}
                />
            </div>
  )
}

export default Login 
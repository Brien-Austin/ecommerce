"use client";
import { Button } from '@/components/ui/button';
import { AuthSession as Session } from '@supabase/supabase-js';
import { useAuthState } from '@/store/auth';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useCallback, useEffect, useState } from 'react';
import { useStore } from 'zustand';
import Image from 'next/image';

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
// ... (previous imports and interfaces)

const App = () => {
  const [data, setData] = useState<UserIdentity[]>([]);
  const [userEmail, setUserEmail] = useState<string | undefined>();
  const supabase = createClientComponentClient();
  const authState = useStore(useAuthState, (state) => state);

  const fetchUser = useCallback(async () => {
    try {
      const response = await supabase.auth.getUserIdentities();
      console.log(response?.data?.identities);
      setData(response?.data?.identities || []);
    } catch (error) {
      console.error(error);
    }
  }, [supabase]);

  const onClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        console.error(error);
      } else {
        await fetchUser();
        const res = await supabase.auth.getUser();
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
    };

    fetchData();
  }, [fetchUser]);

  return (
    <>
      {authState.isLoggedIn ? (
        <>
          Logged in  
          <div>
            {data.map((item, index) => (
              <div key={index}>
                {item.identity_data && (
                  <>
                    <h1>{item.id}</h1>
                    <p>Email: {String(item.identity_data.email)}</p>
                    <Image src={String(item.identity_data.picture)} width={50} height={50} alt='nothing'/>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Button onClick={onClick}>Continue with Google</Button>
        </>
      )}
    </>
  );
};

export default App;
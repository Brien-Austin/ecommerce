'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';

import React from 'react'

const AuthPage = () => {
    const supabase = createClientComponentClient()
  return (
    <div>Auth Page
        <Auth redirectTo={`${window.location.origin}/aut/callback`} supabaseClient={supabase} onlyThirdPartyProviders providers={['google']}  />
    </div>
  )
}

export default AuthPage
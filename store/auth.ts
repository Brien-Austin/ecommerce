
import { create, State } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  userId: string;
  setLogin : ()=>void;
  setLogout : ()=>void;
}

export const useAuthState = create(
  persist<AuthState>(
    (set,get) => ({
      isLoggedIn: true,
      userId: '',
      setLogin : () =>{
        set((state)=>({isLoggedIn : true}))

      },
      setLogout : ()=>{
        set((state)=>({isLoggedIn : false}))
      }

    })
    ,
    {
      name: 'auth-state',
    },

  )
);


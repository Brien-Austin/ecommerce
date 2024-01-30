
import { create, State } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  userId: string | null;
  email : string | null;
  userName : string | null;
  photoUrl: string | null;
  setPhotoUrl: (photoUrl: string) => void;
  setUserName: (userName: string) => void;
  setEmail: (email: string) => void;
  setLogin: ()=>void;
  setLogout: ()=>void;
}

export const useAuthState = create(
  persist<AuthState>(
    (set,get) => ({
      isLoggedIn: true,
      email : '',
      userName : '',
      photoUrl : '',
      userId: '',
      setEmail : (email : string) =>{
        set((state)=>({email : email}))

      },
      setUserName : (userName : string) =>{
        set((state)=>({userName : userName}))

      },
      setPhotoUrl : (photoUrl : string) =>{
        set((state)=>({photoUrl : photoUrl}))

      },
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


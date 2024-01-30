"use client"
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, UserInfo } from 'firebase/auth';
import { auth, provider } from '@/firebase.config';
import { Button } from '@/components/ui/button';
import { useStore } from 'zustand';
import { useAuthState } from '@/store/auth';

interface UserData {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

const Profile = () => {
  const {isLoggedIn,setLogout,setEmail,setPhotoUrl,setUserName,setLogin} = useStore(useAuthState,(state)=>state)
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: UserInfo | null) => {
      if (user) {
        console.log("User logged in");
        const { displayName, email, phoneNumber, photoURL, providerId, uid } = user;
        setEmail(email!)
        setPhotoUrl(photoURL!)
        setUserName(displayName!)
        setLogin()

        setUserData({ displayName, email, phoneNumber, photoURL, providerId, uid });
        console.log(photoURL)
      } else {
        console.log("User not logged in");
        setLogout();
        setUserData(null);

      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  },[setEmail, setPhotoUrl, setUserName,setLogin,setLogout]);

  console.log(userData)

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider).then((result) => {
      // The user is signed in, result.user contains user information
      console.log("Logged in");
      console.log()
    });
  };
  console.log(isLoggedIn)

  return (
    <>
      {isLoggedIn ? 
      ( <>
       <h1>Logged in</h1>
       
      </> ) 
      : 
      ( 
      <>
        <Button onClick={()=>handleGoogleSignup()}>
          Continue with google
        </Button>
      </> )}
    </>
  );
};

export default Profile;

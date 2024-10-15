import React from 'react'
import './App.css'

import { app } from './Firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'


const App = () => {

  const handleGoogleAuth = async () => {

    try {

      const Provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = signInWithPopup(auth, Provider)

      console.log(result)

      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, avatar: result.user.photoURL })


      })

      const data = await res.json();
    } catch (error) {
      console.log("Error in google auth")
    }
  }



  return (
    <button type='submit' onClick={handleGoogleAuth}>Continue With Google</button>
  )
}

export default App
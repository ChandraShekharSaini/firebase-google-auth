import React from 'react'
import './App.css'
import app from './Firebase'
import {GoogleAuthProvider , getAuth ,signInWithPopup} from 'firebase/auth'

const App = () => {

  const handleGoogleAuth =  () => {

      try {
          const Provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const userData = signInWithPopup(auth , Provider);
          console.log(userData);

      } catch (error) {
        console.log("Error in GoogleAuth",error)
      }
  }



  return (
    <button type='submit' onClick={handleGoogleAuth}>Continue With Google</button>
  )
}

export default App
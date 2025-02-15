
// import { createContext, useContext, useState } from "react";
// import { auth } from "../firebase/firebase.config";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const AuthContext = createContext();
// export const useAuth = () => {
//   return useContext(AuthContext)
// }

// // authProvider
// export const AuthProvide = ({children}) => {
//   const [currentUser, setcurrentUser] = useState(null);
//   const [loading, setloading] = useState(true);

//   //register user
//   const registerUser = async (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

 

//   const value = {
//     currentUser,
//     registerUser // Add other auth functions as needed
//   };

//   return (
//     <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>
//   );
// };

// -----------------------------------------------------------------------------


import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Register user
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Registration Error:", error.message);
      throw error;
    }
  };

  //login user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }


  // Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setCurrentUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      throw error;
    }
  };

  //logout user
  const logout = () => {
    return signOut(auth)
  }



  // Track user authentication state or manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if(user) {
        const {email, displayName, photoURL} = user;
        const userData = {
          email, username: displayName, photo: photoURL
        }
      }
    })

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

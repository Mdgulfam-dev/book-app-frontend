// import React from 'react'
// import { useState } from "react"; 
// import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { useAuth } from '../context/AuthContext';


// const Register = () => {
//   const [message, setMessage] = useState("");
//   const {registerUser} = useAuth();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

// // register user


// const onSubmit = async (data) => {
//   try {
//     await registerUser(data.email, data.password);
//     alert("User registered successfully");
//   } catch (error) {
//     setMessage("Please provide a valid email and passwords"); // Show actual Firebase error
//     console.log(error);
//   }
// };



//   const handleGoogleSignIn = () => {};

//   return (
//     <div className=" h-[calc(100vh-120px)] flex justify-center items-center ">
//       <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-xl font-semibold mb-4">Please Register</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="Email"
//             >
//               Email
//             </label>
//             <input
//               {...register("email", { required: true })}
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email Address"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="Password"
//             >
//               Password
//             </label>
//             <input
//               {...register("password", { required: true })}
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your Password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//           </div>
//           {message && (
//             <p className="text-red-500 text-xs italic mb-3"> {message}</p>
//           )}

//           <div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
//               Register
//             </button>
//           </div>
//         </form>
//         <p className="align=baseline font-medium mt-4 text-sm">
//           Haven't an account? Please{" "}
//           <Link className="text-blue-500 hover:text-blue-700" to="/login">
//             Login
//           </Link>{" "}
//         </p>

//         {/* {google sign in} */}
//         <div className="mt-4">
//           <button
//             onClick={handleGoogleSignIn}
//             className="border w-full flex flex-wrap gap-1 items-center justify-center bg-[#0D0842] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none  "
//           >
//             <FaGoogle className="mr-2" />
//             Sign in with Google
//           </button>
//         </div>
//         <p className="mt-5 text-center text-gray-500 test-xs">
//           @2025 Book store. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// <----------------------------------------------------------------->


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";


// const Register = () => {
//   const [message, setMessage] = useState("");
//   const { registerUser, signInWithGoogle } = useAuth();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate;
  

//   // Register user
//   const onSubmit = async (data) => {
//     try {
//       await registerUser(data.email, data.password);
//       alert("User registered successfully");
//     } catch (error) {
//       setMessage(error.message); // Show actual Firebase error
//       console.error("Firebase Error:", error);
//     }
//   };

//   // Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       alert("Google sign-in successful!");
//       navigate("/")
//     } catch (error) {
//       setMessage(error.message);
//       console.error("Google Sign-In Error:", error);
//     }
//   };

//   return (
//     <div className="h-[calc(100vh-120px)] flex justify-center items-center">
//       <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-xl font-semibold mb-4">Please Register</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               {...register("email", { required: "Email is required" })}
//               type="email"
//               id="email"
//               placeholder="Email Address"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//             {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
//               type="password"
//               id="password"
//               placeholder="Enter your Password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//             {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
//           </div>

//           {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

//           <div>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
//               Register
//             </button>
//           </div>
//         </form>

//         <p className="text-sm mt-4">
//           Already have an account?{" "}
//           <Link className="text-blue-500 hover:text-blue-700" to="/login">
//             Login
//           </Link>
//         </p>

//         {/* Google Sign-In */}
//         <div className="mt-4">
//           <button
//             onClick={handleGoogleSignIn}
//             className="border w-full flex items-center justify-center bg-[#0D0842] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none"
//           >
//             <FaGoogle className="mr-2" />
//             Sign in with Google
//           </button>
//         </div>

//         <p className="mt-5 text-center text-gray-500 text-xs">
//           @2025 Book store. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;




// ------------



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // ✅ Corrected useNavigate call

  // Register user
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully");
      navigate("/"); // Redirect after registration
    } catch (error) {
      setMessage(error.message); // Show actual Firebase error
      console.error("Firebase Error:", error);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        alert("Google sign-in successful!");
        navigate("/"); // ✅ Redirect only on success
      }
    } catch (error) {
      setMessage(error.message);
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>

          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" to="/login">
            Login
          </Link>
        </p>

        {/* Google Sign-In */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="border w-full flex items-center justify-center bg-[#0D0842] text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-5 text-center text-gray-500 text-xs">
          @2025 Book store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;

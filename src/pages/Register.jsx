import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

    } catch(error) {

      alert("Registration Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500">

      <div className="backdrop-blur-lg bg-white/20 p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/80 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/80 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/80 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-purple-600 font-bold p-3 rounded-lg hover:bg-gray-200 transition"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );

};

export default Register;
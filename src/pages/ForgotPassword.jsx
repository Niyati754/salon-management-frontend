import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
const [email, setEmail] = useState("");

 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/forgot-password`,
    { email }
  );

  toast.success(res.data.message);
  } catch (err) {
  toast.error(err.response?.data?.message);
  }
};

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <h2 className="text-xl mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-pink-500 text-white px-4 py-2 w-full">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
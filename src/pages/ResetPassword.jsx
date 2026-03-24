import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: params.get("email"),
    token: params.get("token"),
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/reset-password`,
        form
      );

      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <h2 className="text-xl mb-4">Reset Password</h2>

        <input
          type="password"
          name="password"
          placeholder="New Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />

        <button className="bg-pink-500 text-white px-4 py-2 w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
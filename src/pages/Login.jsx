import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? `${import.meta.env.VITE_API_URL}/login`
        : `${import.meta.env.VITE_API_URL}/register`;

      const response = await axios.post(url, form);

      // SUCCESS
      toast.success(response.data.message || "Success!");

       //  REGISTER FLOW
      if (!isLogin) {
        // reset form
        setForm({
          name: "",
          email: "",
          password: "",
          remember: false
        });

        // switch to login
        setIsLogin(true);
      }

      // Store token if login
      if (isLogin && response.data.token) {
        if (form.remember) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }

         // redirect to home
          setTimeout(() => {
            navigate("/");
          }, 1000);
      }

      console.log(response.data);

    } catch (error) {
      // ERROR HANDLING
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        toast.error("Server error!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-200">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Welcome Back 💇‍♀️" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border pl-10 py-2 rounded-lg"
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border pl-10 py-2 rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border pl-10 pr-10 py-2 rounded-lg"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {/* Remember Me */}
          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember Me
              </label>

              <a onClick={() => navigate("/forgot-password")} className="text-pink-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
          >
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        {/* Toggle */}
        <p className="text-center text-sm mt-5">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-600 font-semibold cursor-pointer"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
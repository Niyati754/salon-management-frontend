import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          SalonPro
        </h1>

        <div className="space-x-6">

          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>

          <Link to="/login" className="hover:text-purple-600">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

    <nav className="absolute top-0 left-0 w-full z-50 text-white">

      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          SALON
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-8 font-semibold">

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link
            to="/appointment"
            className="border px-4 py-2 rounded"
          >
            Book Now
          </Link>

        </div>


        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-black/80 px-6 pb-6 space-y-4">

          <Link to="/" className="block">Home</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/gallery" className="block">Gallery</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>

        </div>

      )}

    </nav>

  );

};

export default Navbar;
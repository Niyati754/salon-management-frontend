function Home() {

  return (

    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-[80vh] flex items-center justify-center">

      <div className="text-center text-white">

        <h1 className="text-5xl font-bold mb-6">
          Salon Management System
        </h1>

        <p className="text-lg mb-6">
          Book your appointment easily and manage your salon professionally
        </p>

        <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Book Appointment
        </button>

      </div>

    </div>

  );
}

export default Home;
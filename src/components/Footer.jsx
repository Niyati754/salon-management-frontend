const Footer = () => {

  return (

    <footer className="bg-black text-white py-10 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>

          <h3 className="text-xl font-bold mb-4">Salon</h3>

          <p>
            Professional beauty and hair services with expert stylists.
          </p>

        </div>

        <div>

          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <p>Home</p>
          <p>Services</p>
          <p>Gallery</p>
          <p>Contact</p>

        </div>

        <div>

          <h3 className="text-xl font-bold mb-4">Contact</h3>

          <p>Ahmedabad, Gujarat</p>
          <p>+91 9876543210</p>
          <p>salon@email.com</p>

        </div>

      </div>

      <p className="text-center mt-8 text-gray-400">
        © 2026 Salon Website
      </p>

    </footer>

  );

};

export default Footer;
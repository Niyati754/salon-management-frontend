import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {

  const services = [
    {
      name: "Hair Styling",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    },
    {
      name: "Hair Coloring",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a"
    },
    {
      name: "Facial Treatment",
      image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
    },
    {
      name: "Bridal Makeup",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
  ];

  return (

    <div>

      {/* HERO SECTION */}

      <section className="relative h-screen">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          className="h-full"
        >

          {/* Slide 1 */}

          <SwiperSlide>

            <div className="relative h-screen">

              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                className="absolute w-full h-full object-cover"
              />

              {/* overlay */}

              <div className="absolute inset-0 bg-black/40"></div>

              {/* text */}

              <div className="absolute inset-0 flex items-center justify-center">

                <h1 className="text-white text-6xl md:text-8xl font-bold text-center">
                  ARTISTIC <br /> APPROACH
                </h1>

              </div>

            </div>

          </SwiperSlide>



          {/* Slide 2 */}

          <SwiperSlide>

            <div className="relative h-screen">

              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-center">

                <h1 className="text-white text-6xl md:text-8xl font-bold text-center">
                  PREMIUM <br /> SALON
                </h1>

              </div>

            </div>

          </SwiperSlide>



          {/* Slide 3 */}

          <SwiperSlide>

            <div className="relative h-screen">

              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-center">

                <h1 className="text-white text-6xl md:text-8xl font-bold text-center">
                  LUXURY <br /> BEAUTY
                </h1>

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </section>


      {/* SERVICES */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
              >

                <img
                  src={service.image}
                  className="h-56 w-full object-cover"
                  alt={service.name}
                />

                <div className="p-5 text-center">

                  <h3 className="font-semibold text-lg">
                    {service.name}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT SALON */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            className="rounded-xl shadow-lg"
            alt="Salon interior"
          />

          <div>

            <h2 className="text-3xl font-bold mb-6">
              About Our Salon
            </h2>

            <p className="text-gray-600 mb-4">
              Our salon offers premium beauty services using modern
              techniques and high quality products. Our expert stylists
              ensure every customer gets the best experience.
            </p>

            <p className="text-gray-600">
              From hair styling to bridal makeup, we provide
              professional services tailored to your needs.
            </p>

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Salon Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {gallery.map((img, index) => (

              <img
                key={index}
                src={img}
                className="rounded-lg shadow-md hover:scale-105 transition"
                alt="Salon work"
              />

            ))}

          </div>

        </div>

      </section>


      {/* TEAM SECTION */}

      <TeamSection />


      {/* TESTIMONIALS */}

      <Testimonials />


      {/* CTA */}

      <section className="py-20 bg-purple-600 text-white text-center">

        <h2 className="text-3xl font-bold mb-6">
          Ready For Your New Look?
        </h2>

        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Book Appointment
        </button>

      </section>

    </div>

  );

};

export default Home;
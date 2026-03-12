import HeroBanner from "../components/HeroBanner";

const Services = () => {

    const services = [
        {
            name: "Hair Cut",
            price: "₹500",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
            desc: "Professional haircut by expert stylists."
        },
        {
            name: "Hair Coloring",
            price: "₹1500",
            image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
            desc: "Premium hair coloring with modern techniques."
        },
        {
            name: "Facial Treatment",
            price: "₹1200",
            image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
            desc: "Skin rejuvenation facial treatment."
        },
        {
            name: "Bridal Makeup",
            price: "₹10000",
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
            desc: "Complete bridal makeup package."
        },
        {
            name: "Hair Spa",
            price: "₹2000",
            image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
            desc: "Deep conditioning hair spa treatment."
        },
        {
            name: "Manicure & Pedicure",
            price: "₹900",
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371",
            desc: "Complete hand and foot care."
        }
    ];

    return (

        <div>

            {/* Hero Banner */}

            <HeroBanner
                title="Our Services"
                image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            />


            {/* Services Section */}

            <section className="py-20 bg-gray-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-12">
                        Beauty & Salon Services
                    </h2>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

                        {services.map((service, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
                            >

                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.name}
                                    </h3>

                                    <p className="text-gray-600 mb-3">
                                        {service.desc}
                                    </p>

                                    <div className="flex justify-between items-center">

                                        <span className="text-purple-600 font-bold">
                                            {service.price}
                                        </span>

                                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                                            Book
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>

    );

};

export default Services;
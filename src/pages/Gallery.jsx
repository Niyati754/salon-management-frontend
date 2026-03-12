import HeroBanner from "../components/HeroBanner";

const Gallery = () => {

    const images = [

        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"

    ];

    return (

        <div>

            {/* Hero Banner */}

            <HeroBanner
                title="Gallery"
                image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            />


            {/* Gallery Section */}

            <div className="py-20 max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Work
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {images.map((img, i) => (

                        <img
                            key={i}
                            src={img}
                            alt="Salon work"
                            className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
                        />

                    ))}

                </div>

            </div>

        </div>

    );

};

export default Gallery;
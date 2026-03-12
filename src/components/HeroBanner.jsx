const HeroBanner = ({ title, image }) => {

    return (

        <section className="relative h-[60vh] w-full">

            {/* Background Image */}

            <img
                src={image}
                className="absolute w-full h-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Title */}

            <div className="absolute inset-0 flex items-center justify-center">

                <h1 className="text-white text-5xl md:text-7xl font-bold text-center">
                    {title}
                </h1>

            </div>

        </section>

    );

};

export default HeroBanner;
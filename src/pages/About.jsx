import HeroBanner from "../components/HeroBanner";

const About = () => {

    return (

        <div>

            {/* Hero Banner */}

            <HeroBanner
                title="About Us"
                image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
            />


            {/* About Content */}

            <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                    alt="Salon"
                    className="rounded-lg shadow-lg"
                />

                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Professional Beauty Salon
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Our salon provides premium beauty and hair services using
                        modern techniques and professional products. Our expert
                        stylists ensure that every customer receives the best
                        experience.
                    </p>

                    <p className="text-gray-600 mb-4">
                        From haircuts and hair coloring to bridal makeup and
                        skincare treatments, we offer a complete beauty solution
                        for our clients.
                    </p>

                    <p className="text-gray-600">
                        Our goal is to make every client feel confident and
                        beautiful with our personalized services.
                    </p>

                </div>

            </section>


            {/* Salon Stats */}

            <section className="bg-gray-100 py-16">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

                    <div>
                        <h3 className="text-3xl font-bold text-purple-600">10+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-purple-600">5000+</h3>
                        <p>Happy Clients</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-purple-600">20+</h3>
                        <p>Beauty Experts</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-purple-600">50+</h3>
                        <p>Services</p>
                    </div>

                </div>

            </section>

        </div>

    );

};

export default About;
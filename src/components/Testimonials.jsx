const Testimonials = () => {

    const reviews = [

        {
            name: "Riya",
            review: "Amazing salon experience. The staff is very professional."
        },

        {
            name: "Neha",
            review: "Best hair styling service in the city!"
        },

        {
            name: "Anjali",
            review: "Loved the facial treatment. Highly recommended."
        }

    ];

    return (

        <section className="py-20 bg-gray-100">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-12">
                    What Our Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {reviews.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white shadow-lg p-6 rounded-xl"
                        >

                            <p className="text-gray-600 mb-4">
                                "{item.review}"
                            </p>

                            <h3 className="font-semibold">
                                {item.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default Testimonials;
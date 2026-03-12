const TeamSection = () => {

    const team = [

        {
            name: "Sophia",
            role: "Hair Stylist",
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
        },

        {
            name: "Emma",
            role: "Makeup Artist",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
        },

        {
            name: "Olivia",
            role: "Skin Specialist",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        }

    ];

    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Meet Our Experts
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    {team.map((member, index) => (

                        <div
                            key={index}
                            className="text-center bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
                        >

                            <img
                                src={member.image}
                                className="h-72 w-full object-cover"
                            />

                            <div className="p-5">

                                <h3 className="font-semibold text-lg">
                                    {member.name}
                                </h3>

                                <p className="text-gray-500">
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default TeamSection;
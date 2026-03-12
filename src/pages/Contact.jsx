import { useState } from "react";
import HeroBanner from "../components/HeroBanner";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        alert("Message Sent Successfully!");

    };

    return (

        <div>

            {/* Hero Banner */}

            <HeroBanner
                title="Contact Us"
                image="https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
            />


            {/* Contact Section */}

            <div className="bg-gray-100 py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Contact Form */}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-lg shadow"
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full border p-3 mb-4 rounded"
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border p-3 mb-4 rounded"
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full border p-3 mb-4 rounded"
                                rows="5"
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
                            >
                                Send Message
                            </button>

                        </form>


                        {/* Contact Info */}

                        <div>

                            <h3 className="text-2xl font-semibold mb-6">
                                Salon Contact Details
                            </h3>

                            <p className="mb-4">
                                📍 Ahmedabad, Gujarat
                            </p>

                            <p className="mb-4">
                                📞 +91 9876543210
                            </p>

                            <p className="mb-4">
                                📧 salon@email.com
                            </p>

                            <p className="mt-6 text-gray-600">
                                Visit our salon for professional beauty and hair
                                services. Our experts are ready to help you look
                                your best.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Contact;
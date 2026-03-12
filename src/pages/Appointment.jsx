import { useState } from "react";

const Appointment = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment Request Submitted!");
        console.log(form);
    };

    return (

        <div className="bg-gray-100 min-h-screen py-16">

            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-10">

                <h2 className="text-3xl font-bold text-center mb-8">
                    Book Appointment
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="service"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Service</option>
                        <option>Hair Cut</option>
                        <option>Hair Coloring</option>
                        <option>Hair Spa</option>
                        <option>Facial Treatment</option>
                        <option>Bridal Makeup</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="time"
                        name="time"
                        className="w-full border p-3 rounded"
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
                    >
                        Book Appointment
                    </button>

                </form>

            </div>

        </div>

    );

};

export default Appointment;
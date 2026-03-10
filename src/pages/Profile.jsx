import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [user,setUser] = useState({});
  const [appointments,setAppointments] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {

    fetchProfile();
    fetchAppointments();

  },[]);

  const fetchProfile = async() => {

    try{

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      setUser(res.data);

    }catch(error){

      console.log(error);

    }

  };

  const fetchAppointments = async() => {

    try{

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/appointments`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      setAppointments(res.data);

    }catch(error){

      console.log(error);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");
    window.location.href="/login";

  };

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        {/* Sidebar */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            My Account
          </h2>

          <ul className="space-y-3">

            <li className="text-purple-600 font-semibold">
              Profile
            </li>

            <li>
              Appointments
            </li>

            <li
              className="text-red-500 cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>

          </ul>

        </div>

        {/* Content */}

        <div className="md:col-span-3 space-y-6">

          {/* User Info */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              Profile Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <p className="text-gray-500">
                  Name
                </p>

                <p className="font-semibold">
                  {user.name}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  {user.email}
                </p>
              </div>

            </div>

          </div>

          {/* Appointments */}

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              My Appointments
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-2">
                      Service
                    </th>

                    <th className="text-left py-2">
                      Date
                    </th>

                    <th className="text-left py-2">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {appointments.map((item,index)=>(

                    <tr key={index} className="border-b">

                      <td className="py-2">
                        {item.service}
                      </td>

                      <td>
                        {item.date}
                      </td>

                      <td>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                          {item.status}
                        </span>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Profile;
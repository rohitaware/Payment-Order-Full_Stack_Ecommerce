import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate =useNavigate();


  useEffect(()=>{
    if(user?.role !== ROLE.ADMIN){
      navigate('/')
    }
},[user])

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      {/* Sidebar Section */}
      <aside className="bg-white min-h-full w-full max-w-[15rem] shadow-md p-4">
        <div className="h-32 flex justify-center items-center flex-col">
          {/* Profile Picture */}
          <div className="text-5xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full object-cover"
                alt={user?.name || "Profile"}
              />
            ) : (
              <FaRegUserCircle />
            )}
          </div>
          <p className="capitalize text-lg font-semibold mt-2">{user?.name || "Guest User"}</p>
          <p className="text-sm text-gray-500">{user?.role || "No Role Assigned"}</p>
        </div>

        {/* Navigation Section */}
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="all-users"
                className="block p-2 rounded hover:bg-gray-100 transition"
              >
                All Users
              </Link>
            </li>
            <li>
              <Link
                to="all-products"
                className="block p-2 rounded hover:bg-gray-100 transition"
              >
                All Products
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanel;

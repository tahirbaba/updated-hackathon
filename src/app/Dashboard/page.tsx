// src/app/component/Dashboard/page.tsx
import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="dashboard-container flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-[286] h-[900] md:w-1/5 bg-white shadow-md flex flex-col">
        <div className="p-6 text-grey-600 font-bold text-[10px] border-b">MAIN MENU</div>
        <nav className="w-[254px] h-[56] hover-color-blue mt-6 flex-1 space-y-4">
          {[
            "Dashboard",
            "Car Rent",
            "Insight",
            "Reimburse",
            "Inbox",
            "Calendar",
          ].map((item, index) => (
            <button
              key={index}
              className="text-left w-full px-6 py-3 text-gray-700 hover:bg-blue-500 hover:text-white-600 font-medium transition-all"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="px-6 py-4 border-t">
          <button className="text-left w-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Topbar */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <input
            type="text"
            placeholder="Search something here"
            className="border border-gray-300 rounded-lg p-2 w-full md:w-64 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details Rental Section */}
          <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Details Rental
            </h2>
            <div className="h-48 bg-gray-200 rounded-lg flex justify-center items-center text-gray-500">
              Map/Route Placeholder
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Pick-Up</p>
                <p className="text-gray-600 text-sm">Kota Semarang</p>
                <p className="text-gray-600 text-sm">20 July 2022 - 07:00</p>
              </div>
              <div>
                <p className="font-medium">Drop-Off</p>
                <p className="text-gray-600 text-sm">Kota Semarang</p>
                <p className="text-gray-600 text-sm">23 July 2022 - 01:00</p>
              </div>
            </div>
            <div className="mt-4 text-right font-bold text-xl text-gray-800">
              Total Rental Price: $80.00
            </div>
          </div>

          {/* Top 5 Car Rental Section */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Top 5 Car Rental
            </h2>
            <div className="h-48 bg-gray-200 rounded-lg flex justify-center items-center text-gray-500">
              Chart Placeholder
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Transactions
          </h2>
          <ul className="space-y-4">
            {[
              { car: "Nissan GT-R", type: "Sport Car", price: "$80.00" },
              { car: "Koenigsegg", type: "Sport Car", price: "$99.00" },
              { car: "Rolls Royce", type: "Luxury Car", price: "$96.00" },
              { car: "CR-V", type: "SUV", price: "$80.00" },
            ].map((transaction, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-700"
              >
                <div>
                  <p className="font-medium">{transaction.car}</p>
                  <p className="text-sm text-gray-500">{transaction.type}</p>
                </div>
                <p className="font-semibold">{transaction.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
    </>
  );
};

export default Dashboard;

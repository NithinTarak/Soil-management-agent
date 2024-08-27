// src/ViewSelector.js
import React, { useState } from "react";
import SoilDetails from './SoilDetails';
import DistributorDetails from "./DistributorDetails";

const UserDashboard = () => {
  const [selectedView, setSelectedView] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Choose What to View</h2>
        <div className="space-y-4">
          <button
            onClick={() => setSelectedView("soil")}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Soil Details
          </button>
          <button
            onClick={() => setSelectedView("distributor")}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            View Distributor Details
          </button>
        </div>
      </div>

      {/* Conditionally render components based on the selected view */}
      {selectedView === "soil" && <SoilDetails />}
      {selectedView === "distributor" && <DistributorDetails />}
    </div>
  );
};

export default UserDashboard;

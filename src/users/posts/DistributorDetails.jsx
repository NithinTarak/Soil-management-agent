// src/DistributorDetails.js
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

const DistributorDetails = () => {
  const [distributorDetails, setDistributorDetails] = useState([]);

  useEffect(() => {
    const fetchDistributorDetails = async () => {
      const distributorCollection = collection(db, "distributorDetails");
      const distributorSnapshot = await getDocs(distributorCollection);
      const distributorList = distributorSnapshot.docs.map((doc) => doc.data());
      setDistributorDetails(distributorList);
    };

    fetchDistributorDetails();
  }, []);

  return (
    <div className="w-full max-w-3xl mt-6 bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Distributor Details</h2>
      {distributorDetails.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="space-y-4">
          {distributorDetails.map((distributor, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-100">
              <p><strong>Name:</strong> {distributor.distributorName}</p>
              <p><strong>Location:</strong> {distributor.location}</p>
              <p><strong>Contact:</strong> {distributor.contactNumber}</p>
              <p><strong>Crops Available::</strong> {distributor.cropsAvailable}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DistributorDetails;

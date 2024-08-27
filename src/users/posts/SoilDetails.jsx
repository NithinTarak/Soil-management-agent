
import React, { useState, useEffect } from "react";
import { db } from '../../firebase/Firebase';
import { collection, getDocs } from "firebase/firestore";

const SoilDetails = () => {
  const [soilDetails, setSoilDetails] = useState([]);

  useEffect(() => {
    const fetchSoilDetails = async () => {
      const soilCollection = collection(db, "soilDetails");
      const soilSnapshot = await getDocs(soilCollection);
      const soilList = soilSnapshot.docs.map((doc) => doc.data());
      setSoilDetails(soilList);
    };

    fetchSoilDetails();
  }, []);

  return (
    <div className="w-full max-w-3xl mt-6 bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Soil Details</h2>
      {soilDetails.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="space-y-4">
          {soilDetails.map((soil, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-100">
              <p><strong>Type:</strong> {soil.soilType}</p>
              <p><strong>pH Level:</strong> {soil.phLevel}</p>
              <p><strong>Moisture:</strong> {soil.moisture}</p>
              <p><strong>Nutrients:</strong> {soil.nutrients}</p>
              <p><strong>Description:</strong> {soil.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoilDetails;

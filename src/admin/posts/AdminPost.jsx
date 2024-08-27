import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostDistributorDetails from './PostDistributorDetails';
import PostSoilDetails from './PostSoilDetails';

const AdminPost = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/post-soil-details')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Soil Details
          </button>
          <button
            onClick={() =>  navigate('/post-distributor-details')}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Post Distributor Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPost;

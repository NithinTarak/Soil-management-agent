// src/PostDistributorDetails.js
import React, { useState } from 'react';
import { db } from '../../firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const PostDistributorDetails = () => {
  const [distributorName, setDistributorName] = useState('');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [cropsAvailable, setCropsAvailable] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add distributor details to Firestore
      await addDoc(collection(db, 'distributorDetails'), {
        distributorName,
        location,
        cropsAvailable,
        contactNumber,
      });
      setMessage('Distributor details posted successfully!');
      setDistributorName('');
      setLocation('');
      setCropsAvailable('');
      setContactNumber('');
    } catch (error) {
      setMessage('Error posting distributor details: ' + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Post Distributor Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Distributor Name</label>
            <input
              type="text"
              value={distributorName}
              onChange={(e) => setDistributorName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter distributor name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter distributor location"
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter contact number"
            />
          </div>
          <div>
            <label className="block text-gray-700">Crops Available</label>
            <input
              type="text"
              value={cropsAvailable}
              onChange={(e) => setCropsAvailable(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter contact number"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} transition duration-300`}
          >
            {isSubmitting ? 'Submitting...' : 'Post Distributor Details'}
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-green-600">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDistributorDetails;

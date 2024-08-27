// src/PostSoilDetails.js
import React, { useState } from 'react';
import { db } from '../../firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const PostSoilDetails = () => {
  const [soilType, setSoilType] = useState('');
  const [phLevel, setPhLevel] = useState('');
  const [moisture,setMoisture] = useState('');
  const [nutrients, setNutrients] = useState('')
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add soil details to Firestore
      await addDoc(collection(db, 'soilDetails'), {
        soilType,
        phLevel,
        moisture,
        nutrients,
        description,
      });
      setMessage('Soil details posted successfully!');
      setSoilType('');
      setPhLevel('');
      setMoisture('');
      setNutrients('');
      setDescription('');
    } catch (error) {
      setMessage('Error posting soil details: ' + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Post Soil Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Soil Type</label>
            <input
              type="text"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter soil type"
            />
          </div>

          <div>
            <label className="block text-gray-700">pH Level</label>
            <input
              type="text"
              value={phLevel}
              onChange={(e) => setPhLevel(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter pH level"
            />
          </div>
          <div>
            <label className="block text-gray-700">Moisture</label>
            <input
              type="text"
              value={moisture}
              onChange={(e) => setMoisture(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter moisture stage"
            />
          </div>
          <div>
            <label className="block text-gray-700">Nutrients</label>
            <input
              type="text"
              value={nutrients}
              onChange={(e) => setNutrients(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter soil type"
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter description"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
          >
            {isSubmitting ? 'Submitting...' : 'Post Soil Details'}
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

export default PostSoilDetails;

import React from "react";

const soilData = [
  { name: "Alluvial Soil", description: "Found near river basins, great for crops like wheat, rice, sugarcane." },
  { name: "Black Soil", description: "Rich in clay, ideal for growing cotton, wheat, and maize." },
  { name: "Red Soil", description: "Rich in iron, good for crops like pulses, millets, and potatoes." },
  { name: "Laterite Soil", description: "Best for crops like tea, coffee, and cashew nuts." },
  { name: "Mountain Soil", description: "Common in hilly regions, great for tea, coffee, and spices." },
  { name: "Desert Soil", description: "Found in arid regions, suitable for drought-resistant crops." },
  { name: "Peaty Soil", description: "High in organic matter, good for rice and jute cultivation." }
];

const SoilCards = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Types of Soil Used in Agriculture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {soilData.map((soil, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-bold mb-4">{soil.name}</h2>
            <p className="text-gray-700">{soil.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoilCards;

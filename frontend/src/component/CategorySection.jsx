// src/components/CategorySection.jsx
import React from "react";
import {
  FaCog,
  FaStethoscope,
  FaPaintBrush,
  FaAtom,
  FaUserTie,
  FaMicrochip,
} from "react-icons/fa";

const categories = [
  {
    title: "Engineering",
    description: "Find Top Engineering College",
    icon: <FaCog size={28} />,
  },
  {
    title: "Medical",
    description: "Find Top Medical College",
    icon: <FaStethoscope size={28} />,
  },
  {
    title: "Arts",
    description: "Find Top Arts College",
    icon: <FaPaintBrush size={28} />,
  },
  {
    title: "Science",
    description: "Find Top Science College",
    icon: <FaAtom size={28} />,
  },
  {
    title: "Management",
    description: "Find Top Management College",
    icon: <FaUserTie size={28} />,
  },
  {
    title: "Technology",
    description: "Find Top Technology College",
    icon: <FaMicrochip size={28} />,
  },
];

const CategorySection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
      <p className="text-gray-600 mb-10">
        Explore colleges in Tamil Nadu by your preferred field of study
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4 text-gray-900">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

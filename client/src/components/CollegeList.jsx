// src/components/CollegeList.jsx
import React from 'react';
import AnnaImg from '../assets/anna - img.jpeg';
import PSGImg from '../assets/psg -img.jpg';
import MadrasChristianImg from '../assets/madras christian college.jpg';import CollegeCard from './CollegeCard';

const colleges = [
  {
    _id: '1',
    name: 'Anna University',
    location: 'Chennai, Tamil Nadu',
    description: 'Renowned for engineering and technology programs.',
    image: AnnaImg
  },
  {
    _id: '2',
    name: 'PSG College of Technology',
    location: 'Coimbatore, Tamil Nadu',
    description: 'Offers a wide range of engineering and applied science programs.',
    image: PSGImg
  },
  {
    _id: '3',
    name: 'Madras Christian College',
    location: 'Tambaram, Chennai',
    description: 'One of the oldest colleges in Asia, offering arts and science degrees.',
    image: MadrasChristianImg
  }
];

const CollegeList = () => {
  return (
    <div className="grid">
      {colleges.map((college) => (
        <CollegeCard key={college._id} college={college} />
      ))}
    </div>
  );
};

export default CollegeList;

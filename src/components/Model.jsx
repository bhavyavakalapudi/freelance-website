import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Model = () =>{

    const { id } = useParams();

    const images = [
        {
            id: 1,
            image: '/Logo1.png',
            clientName: 'Client A',
            description: 'This is a brief description of the project.',
        },
        {
            id: 2,
            image: '/Logo3.png',
            clientName: 'Client B',
            description: 'This is a brief description of another project.',
        },
        {
            id: 3,
            image: '/Logo2.png',
            clientName: 'Client C',
            description: 'This is a brief description of another project.',
        },
        {
            id: 4,
            image: '/Logo4.png',
            clientName: 'Client D',
            description: 'This is a brief description of another project.',
        },
        {
            id: 5,
            image: '/Logo1.png',
            clientName: 'Client E',
            description: 'This is a brief description of another project.',
        },
        {
            id: 6,
            image: '/Logo6.png',
            clientName: 'Client F',
            description: 'This is a brief description of another project.',
        },
        {
            id: 7,
            image: '/Logo7.png',
            clientName: 'Client G',
            description: 'This is a brief description of another project.',
        },
        {
            id: 8,
            image: '/Logo8.png',
            clientName: 'Client H',
            description: 'This is a brief description of another project.',
        },
        {
            id: 9,
            image: '/Logo9.png',
            clientName: 'Client I',
            description: 'This is a brief description of another project.',
        },
    ];

      const image = images.find((img) => img.id === parseInt(id));

  if (!image) {
    return <p>Image not found</p>;
  }

  return <div>
    <div>
        <Navbar/>
    </div>
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={image.image}
        alt=""
        className="mx-auto items-center h-auto max-w-full rounded-lg mb-6"/>
      <h2 className="text-3xl font-semibold mb-4 text-center">{image.clientName}</h2>
      <p className="text-lg text-gray-700 md:mb-4 mb-15 text-center">{image.description}</p>
    </div>
    <Footer/>
  </div>
};
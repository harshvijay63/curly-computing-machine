import React, { useState } from 'react';
import Card from './Card';
import '../styles/card.css';
import cloth from '../assets/cloth.png';
import print from '../assets/printing1.jpeg';
import computer from '../assets/computer.jpg';

const processes = [
  { title: "Stitching", imageSrc: cloth, description: "Precision stitching for durability and style." },
  { title: "Printing", imageSrc: print, description: "High-quality printing for vibrant designs." },
  { title: "Computer Embroidery", imageSrc: computer, description: "Detailed computer embroidery for intricate designs." },
];

function ManufacturingPage() {
  const [selectedProcess, setSelectedProcess] = useState(null);

  

  const handleBackClick = () => {
    setSelectedProcess(null);
  };

  return (
    <>
      {selectedProcess ? (
        <div className="process-detail">
          <h2>{selectedProcess.title}</h2>
          <img src={selectedProcess.imageSrc} alt={selectedProcess.title} style={{ maxWidth: '30%', height: 'auto' }} />
          <p>{selectedProcess.description}</p>
          <button onClick={handleBackClick}>Back to Processes</button>
        </div>
      ) : (
       
        <div className="card-container">
          {processes.map((process, index) => (
          
              <Card
                title={process.title}
                imageSrc={process.imageSrc}
                description={process.description}
              />
            
          ))}
        </div>
      )}
    </>
  );
}

export default ManufacturingPage;

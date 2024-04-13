
import React from 'react';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      {imageSrc && <img src={imageSrc} alt={title} />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;

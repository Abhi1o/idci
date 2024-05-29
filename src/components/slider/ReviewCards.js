import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewCards = ({ image, name, title, review, position, rating }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={image} className="card-img-top" alt={`${name}'s profile`} />
        <div className="card-body mt-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-2 ">{review.substring(0,90)+"..."}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
          <h6 className="card-subtitle text-muted mb-0">{title}</h6>
          <p className="card-text "><small className="text-muted">{position}</small></p>
            </div>

          <div className="card-text ">
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index} className="text-warning">&#9733;</span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
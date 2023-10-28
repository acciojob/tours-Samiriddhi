import React, { useState, useEffect } from 'react';

const TourList = () => {
  // Define the state to store tour data and loading status
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tour data from the predefined list
  useEffect(() => {
    // Simulate an API call (you can replace this with actual API fetch)
    setTimeout(() => {
      setTours(predefinedTourData);
      setLoading(false);
    }, 1000);
  }, []);

  // Define a function to handle tour deletion
  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  // Check if all tours are deleted
  const noToursLeft = tours.length === 0;

  return (
    <div className="main">
      <h1 className="title">Tour List</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : noToursLeft ? (
        <div>
          <p>No more tours</p>
          <button className="btn" onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
      ) : (
        <div>
          {tours.map((tour) => (
            <div key={tour.id} className="single-tour">
              <img src={tour.image} alt={tour.name} />
              <h2>{tour.name}</h2>
              <p className="tour-info">
                {tour.info.length > 200 ? (
                  <span>
                    {tour.info.substring(0, 200)}
                    <button>See More</button>
                  </span>
                ) : (
                  tour.info
                )}
              </p>
              <p className="tour-price">Price: {tour.price}</p>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTour(tour.id)}
              >
                Delete Tour
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourList;

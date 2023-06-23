// ApartmentsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApartmentsList = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/apartments`)
        .then(response => {
          setApartments(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchApartments();
  }, []);

  console.log(apartments , "give use the content")

  return (
    <div>
      <h1>Apartment List</h1>
      {apartments.map(apartment => (
        <div key={apartment._id}>
          <h3>{apartment.title}</h3>
          <img src={apartment.img} alt="img"/>
          <Link to={`/apartments/${apartment._id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ApartmentsList;

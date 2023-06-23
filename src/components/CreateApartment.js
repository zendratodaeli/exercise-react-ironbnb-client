import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateApartment() {
  const [formData, setFormData] = useState({ img: '', title: '', pricePerDay: 0 });
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

function handleSubmit(e) {
  e.preventDefault();

  axios.post('https://ironbnb-m3.herokuapp.com/apartments', formData)
    .then(response => {
      console.log(response);
      navigate('/apartments')
    })
    .catch(e => console.log(e))
  }

  return(
    <div>
      <h1>Create New Apartment</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='img' placeholder='input the image' onChange={handleInputChange}/>
        <input type='text' name='title' placeholder='input the title' onChange={handleInputChange}/>
        <input type='number' name='pricePerDay' placeholder='input the price' onChange={handleInputChange}/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )

}



export default CreateApartment;


// import axios from "axios";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

// function AddMovie(props) {
//   const [title, setTitle] = useState("");
//   const [pricePerDay, setPricePerDay] = useState("");
  
//   const handleSubmit = (e) => {
//     e.preventDefault(); // avoid page refresh
    
//     const newApartment = {
//       title: title,
//       pricePerDay: pricePerDay,
//       img: img,
//     }


//     // props.callCreateMovie(newMovie);
    
//     // Clear form
//     setTitle("");
//     setPricePerDay("");
//   }


//   return (
//     <section className="AddMovie">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title
//           <input
//             type="text"
//             name="title"
//             placeholder="enter the title"
//             required={true}
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//         </label>

//         <label>
//           Price per day
//           <input
//             type="number"
//             min={0}
//             max={10}
//             name="rating"
//             required={true}
//             value={pricePerDay}
//             onChange={(e) => {
//               setPrice(e.target.value);
//             }}
//           />
//         </label>

//         <button>Create</button>
//       </form>
//     </section>
//   );
// }

// export default AddMovie;




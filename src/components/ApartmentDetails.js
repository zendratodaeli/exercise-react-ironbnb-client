import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ApartmentDetails() {

const { id } = useParams()

  console.log(id);

  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apartments/${id}`)
      .then(response => {
        console.log(response);
        setDetails(response.data)
      })
      .catch(e => console.log(e))
      
  }, [])
  
  if (details.length === 0) {
    return <div>Loading...</div>;
  }

  return(
    <div>
      <h1>Details of House</h1>
      <h3>{details.title}</h3>
      <img src={details.img} alt="img"/>
      <h3>{details.pricePerDay}</h3>
    </div>
  )
}

export default ApartmentDetails;
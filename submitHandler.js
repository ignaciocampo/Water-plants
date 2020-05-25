import axios from 'axios';
import React, { useState, useEffect } from "react";

import dummyPlants from "./dummyData";

const SubmitButton = props => {

    const [plant, setPlant] = useState(dummyPlants);

    const [users, setUsers] = useState([]);
    
    
   
const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(plant);
    axios
    .post("https://reqres.in/api/users", plant)
    .then(response =>  setUsers([...users, response.data]))
    .catch(err => console.log(err));
  };



  const handleChange = (event) => {
    event.persist() 
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  

  return (
 <div>
   <form onSubmit={handleSubmit}>

   <label htmlFor="Name">Name:</label>
          <input className="name-input"
            id="name"
            type="text"
            name="nickname"
            placeholder="Please Enter Your Name:"
            value={plant.name}
            onChange={handleChange}
          />

<button className='submit-button'  >
          type="submit">Click To Submit!</button>
 
          </form>
    </div>
  )
}

export default SubmitButton
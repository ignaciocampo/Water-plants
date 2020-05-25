
import logo from './logo.svg';
import './App.css';
import Watering from './PlantMap'
import SubmitButton from './submitHandler'
import dummyData from './dummyData'
import React, { useState } from "react";
import PlantSubmision from './PlantSubmision'
import PostHeader from './PlantHeader'
import dummyPlants from './dummyData';

const PlantSetter = (props) => {

  const [newPlant, setNewPlant] = useState(dummyPlants)


 console.log(props)
  
  const handleSubmit = (newestPlant) => {
    setNewPlant([...newPlant, newestPlant]);
  }

  return (
    <div className="Plant-Submision">
    <div>
      <SubmitButton onSubmit={handleSubmit}/>
      <PlantSubmision newPlant={newPlant}/>

      
      <Watering  />

      
      
      <div className="post-border">

       
    </div>

</div>
    </div>
  );
  }


export default PlantSetter

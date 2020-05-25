
    import React from 'react'
    import dummyPlants from './dummyData'
    
    import Plants from './Plants'
import PlantsPost from './PlantsPost';

    const PlantsMap = props => {
      // set up state for your data
      
    
      return (
        <div className="posts-container-wrapper">
           {dummyPlants.map((PlantElements)=> <PlantsPost PlantData={PlantElements} />
           )}
           
        
        </div>
      );
    };
    
   export default PlantsMap
  
  
  

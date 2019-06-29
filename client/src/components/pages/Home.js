import React from "react";
import Employee from '../employees/Employee'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        employee form
      </div>
      <div>
        <Employee />
      </div>
      
    </div>
  );
};

export default Home;

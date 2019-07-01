import React from "react";


  const time =  new Date().toLocaleTimeString()

const Home = () => {

  return (
    <div className="grid">
      <h3>home page</h3>
      <h3>it is {time}</h3>
    </div>
  );
};

export default Home;

import React from "react";
import ServiceForm from "../service/ServiceForm";
import ServiceFilter from "../service/ServiceFilter";
import ServuiceItem from "../service/ServiceItem";

const Services = () => {
  return (
    <div className="grid-2">
      <div>
        
        <ServiceForm />
      </div>
      <div>
        
        <ServiceFilter />
        
        <ServuiceItem />
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import ReqbyFilter from "../reqby/ReqbyFilter";
import ReqbyForm from '../reqby/ReqbyForm';
import ReqbyItem from '../reqby/ReqbyItem';

const Reqby = () => {
  return (
    <div className="grid-2">
      <div>
        <ReqbyForm />
      </div>
    
      <div>
      <ReqbyFilter />
      <ReqbyItem /> 
    </div>
    </div>
  );

};

export default Reqby;

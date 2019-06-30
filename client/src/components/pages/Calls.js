import React from "react";
import Call from "../calls/Calls";
import CallFilter from "../calls/callFilter";
import CallForm from '../calls/CallForm';

const Calls = () => {
  return (
    <div>
      <h4>Call Entry Form </h4>
      <div className='grid-2'>
      <div>
      <CallForm />
      </div>
      <div>
      <CallFilter />
      <Call />
      </div>
      </div>
    </div>
  );
};

export default Calls;

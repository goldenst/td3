import React from "react";

const reqbyform = () => {
  const onChange = () => {};

  return (
    <div>
      <div>
        <p>Requested by Form</p>
        <form>
          <input
            type="text"
            placeholder="Requested By"
            id="req_by"
            name="reqbu"
            onChange={onChange}
          />

          <input
            type="text"
            placeholder="555-555-5555"
            name="rphoneeqbu"
            onChange={onChange}
          />

          <input
            type="text"
            placeholder="Contact"
            name="contact"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default reqbyform;

import React from 'react'

const ServiceForm = () => {

  const onChange = () => {

  }

  return (
    <div>
        <div>
        <p>Services Form</p>
        <form>
          <input
            type="text"
            placeholder="Service"
            id="service"
            name="service"
            onChange={onChange}
          />

          <input
            type="text"
            placeholder="rate"
            name="rate"
            onChange={onChange}
          />

          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={onChange}
          />
          <button className='btn btn-primary btn-block'>Add Call</button>
        </form>
      </div>
    </div>
  )
}

export default ServiceForm

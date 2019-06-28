import React from "react";

const Customers = () => {
  return (
    <div class="container">
      <form>
        <div class="headder">
          <h4>Customer Info</h4>
          <hr />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Customer Name</label>
            <input
              type="email"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Cell Number</label>
            <input
              type="text"
              class="form-control"
              id="cell"
              placeholder="555-555-5555"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="City"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>CA</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputAddress">E Mail - for Reciept Purposes</label>
            <input
              type="email"
              class="form-control"
              id="inputAddress"
              placeholder="John@Gm.com"
            />
            <label>Email will not be sold to third party vendors</label>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">AAA Membership Number</label>
            <input
              type="text"
              class="form-control"
              id="cell"
              placeholder="005..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Customers;

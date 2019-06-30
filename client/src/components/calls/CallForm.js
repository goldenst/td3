import React from "react";

const CallForm = () => {
  return (
    <div>
      <form>
        <div className="headder">
          <h4>Customer Info</h4>
          <hr />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="name"
              placeholder="Requested By"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="cell"
              placeholder="AAA Call Number"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="name"
              placeholder="Customer / Member"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="cell"
              placeholder="Cell Number"
            />
          </div>
        </div>
        <div className="form-group col=12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Street Addess"
          />
        </div>

        <div className="form-row">
          <div className="col-5">
            <input type="text" className="form-control" placeholder="City" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="State" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Zip" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>E Mail - for Reciept Purposes</label>
            <input
              type="email"
              className="form-control"
              id="inputAddress"
              placeholder="John@Gm.com"
            />
          </div>
          <div className="form-group col-md-6">
            <label>AAA Membership Number</label>
            <input
              type="text"
              className="form-control"
              id="cell"
              placeholder="005..."
            />
          </div>
        </div>
        <div className="form-group col=12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Breakdown location"
          />
        </div>

        <div className="form-row">
          <div className="col-2">
            <input type="text" className="form-control" placeholder="Year" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Make" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Model" />
          </div>
          <div className="col-2">
            <input type="text" className="form-control" placeholder="Color" />
          </div>
        </div>
        <div className="form-row">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Licence" />
          </div>
          <div className="col-2">
            <input type="text" className="form-control" placeholder="State" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Vin#" />
          </div>
        </div>

        <div className="form-group col=12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Tow destination"
          />
        </div>
        <br />
        <h5>Services</h5>
        <hr />
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Services Performed"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Miles To Vehicle"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="TOW miles"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Time on Scene"
            />
          </div>
        </div>
        <textarea type='text' placeholder='Comments / Notes' />

        <div>
          <input
            type="submit"
            value="Add Call"
            className="btn brn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default CallForm;

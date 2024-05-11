import React from "react";
import "../styles/editvehicledetails.css";
// import TrackingChart from "../charts/TrackingChart";
//import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//import AddVehicleForm from "../components/AddVehicleForm";
import UpdateVehicleForm from "../components/UpdateVehicleForm";
//import VehicleListing from "../components/VehicleListing";
//import SingleCarItem from "../components/reuseable/SingleCarItem";

const editVehicleDetails = () => {
  //const percentage = 55;
  //const percentage02 = 45;
  return (
    <div className="edit__cars">
      <div className="edit__car-wrapper">
        <h2 className="edit__car-title">Add Vehicles</h2>
        <div className="">
          {/* <div className="tracking__history">
            {/* <h3>Add Vehicle</h3> */}
            {/* <TrackingChart /> */}
            {/* <UpdateVehicleForm/> */}
          {/* </div> */} 

          <div className="edit__car-img">
            {/* <h2>2022 Mercedes Benz</h2>
            <img src={sellCar} alt="" /> */}
            <UpdateVehicleForm/>
          </div>

          {/*<div className="add__car-img">
             <h2>Vehicle Listing</h2>
            {/* <img src={sellCar} alt="" /> */
            /* <VehicleListing/> */
            /* <SingleCarItem/> */}
          </div>

        
      </div>
    </div>
  );
};

export default editVehicleDetails;

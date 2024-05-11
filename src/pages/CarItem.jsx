import React from "react";
import { useNavigate } from 'react-router-dom';
import editVehicleDetails from "./editVehicleDetails";

const CarItem = ({ item }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // Navigate to editVehicleDetails page with the relevant car ID
    // navigate(`/editVehicleDetails?id=${item.id}`);
    
  };

  return (
    <div className="car-item">
      <img src={item.imgUrl} alt={item.carName} />
      <div className="car-details">
        <h3>{item.carName}</h3>
        <p>Category: {item.category}</p>
        <p>Type: {item.type}</p>
        {/* Use handleEditClick function to handle button click */}
        <button onClick={handleEditClick}>EDIT</button>
      </div>
    </div>
  );
};

export default CarItem;







































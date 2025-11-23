// src/components/CarItem.js
import React from "react";

class CarItem extends React.Component {
  render() {
    const { car } = this.props; // props kayji men CarList
    return (
      <div className="car-item" style={{border: "1px solid gray", padding: "10px", margin: "5px"}}>
        <h3>{car.car} - {car.car_model}</h3>
        <p>Year: {car.car_model_year}</p>
        <p>Color: {car.car_color}</p>
        <p>Price: {car.price}</p>
        <p>Available: {car.availability ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default CarItem;

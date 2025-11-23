import React from "react";

class CarList extends React.Component {
  render() {
    return (
      <>
        {
          <ul>
            {this.props.cars.map((car) => (
              <li key={car.id}>
                {car.car} - {car.car_model} - {car.car_color}-{" "}
                {car.car_model_year} - {car.price} - {car.availability ? "Available" : "Not available"}
              </li>
            ))}
          </ul>
        }
      </>
    );
  }
}

export default CarList;

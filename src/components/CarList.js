import React from "react";

class CarList extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading ? (
          <h2>Chargement...</h2>
        ) : (
          <ul>
            {this.props.cars.map(car => (
              <li key={car.id}>{car.car} - {car.car_model} -  {car.car_color}
              - {car.car_model_year} - {car.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CarList;

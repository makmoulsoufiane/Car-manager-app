// src/components/CarList.js
import React from "react";
import CarItem from "./CarItem";

class CarList extends React.Component {
  render() {
    const { cars } = this.props;

    return (
      <>

        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))} 

      </>
    );
  }
}

export default CarList;

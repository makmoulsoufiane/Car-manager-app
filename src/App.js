import React from "react";
import "./App.css";
import { getCars } from "./services/carsApi";
import CarList from "./components/CarList";
import Loader from "./components/Loader";

class App extends React.Component {
  state = {
    cars: [],
    loading: true,
  };

  async componentDidMount() {
    console.log("ComponentDidMount: start fetch");
    const cars = await getCars();
    console.log("ComponentDidMount: data received", cars.slice(0, 10));
    this.setState({
      cars: cars.slice(0, 10), // ناخدو أول 10 سيارات
      loading: false,
    });
  }

  render() {
    console.log(
      "Render: cars =",
      this.state.cars,
      "loading =",
      this.state.loading
    );

    return this.state.loading ? <Loader /> : <CarList cars={this.state.cars} />;
  }
}

export default App;

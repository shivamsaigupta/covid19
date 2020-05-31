import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Chart, CountrySelector, NumberBoard, Header } from "./components";
import { fetchData, fetchCountryData } from "./api";

class App extends React.Component {
  state = {
    error: "er",
    countryCode: "SE",
    countryName: "Sweden",
  };

  onCountrySubmit = (value) => {
    this.setState({
      countryCode: value,
    });
  };

  render() {
    const { countryCode, dailyData } = this.state;
    return (
      <Container className="homeContainer">
        <Header countryCode={countryCode} />
        <NumberBoard data={this.state.summaryData} countryCode={countryCode} />
        <CountrySelector onSubmit={this.onCountrySubmit} />
        <Chart countryCode={countryCode} />
      </Container>
    );
  }
}

export default App;

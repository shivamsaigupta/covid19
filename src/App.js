import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Chart, CountrySelector, NumberBoard, Header } from "./components";
import { fetchData, fetchCountryData } from "./api";

class App extends React.Component {
  state = {
    summaryData: [],
    error: "er",
    countryCode: "SE",
    countryName: "Sweden",
    dailyData: [],
  };

  componentDidMount() {
    this.fetchSummary();
  }

  componentDidUpdate() {
    this.fetchSummary();
  }
  fetchSummary = async () => {
    const summaryData = await fetchCountryData(this.state.countryCode);
    if (summaryData !== undefined) {
      this.setState({
        summaryData: summaryData,
      });
    } else {
      // if the request fails, re-try
      setTimeout(this.fetchSummary, 3000);
    }
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

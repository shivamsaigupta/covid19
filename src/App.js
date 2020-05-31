import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Chart, CountrySelector, NumberBoard, Header } from "./components";
import { fetchData, fetchDailyUpdate } from "./api";

class App extends React.Component {
  state = {
    summaryData: [],
    error: "er",
    countryCode: "SE",
    dailyData: [],
  };

  componentDidMount() {
    this.fetchSummary();
  }

  fetchSummary = async () => {
    const summaryData = await fetchData();
    if (summaryData !== undefined) {
      this.setState({
        summaryData: summaryData,
      });
    } else {
      // if the request fails, re-try
      setTimeout(this.fetchSummary(), 1000);
    }
  };

  onCountrySubmit = (value) => {
    this.setState({
      countryCode: value,
    });
    console.log("new country set with ISO2: ", this.state.countryCode);
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

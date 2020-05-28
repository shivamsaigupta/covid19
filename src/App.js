import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Chart, CountrySelector, NumberBoard, Header } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    summaryData: [],
    error: "er",
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

  render() {
    return (
      <Container className="homeContainer">
        <Header />
        <NumberBoard data={this.state.summaryData} />
        <CountrySelector />
        <Chart />
      </Container>
    );
  }
}

export default App;

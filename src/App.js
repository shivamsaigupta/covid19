import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Card } from "react-bootstrap";
import { Chart, CountrySelector, NumberBoard } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    summaryData: [],
  };

  async componentDidMount() {
    const summaryData = await fetchData();
    if (summaryData !== undefined) {
      this.setState({
        summaryData: summaryData,
      });
    }
  }
  render() {
    return (
      <Container className="homeContainer">
        <Card>
          <h1 className="styles.headingText">Covid19</h1>
        </Card>

        <NumberBoard data={this.state.summaryData} />
        <CountrySelector />
        <Chart />
      </Container>
    );
  }
}

export default App;

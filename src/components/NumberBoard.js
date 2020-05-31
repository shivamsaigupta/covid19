import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
import { fetchCountryData } from "../api";

class NumberBoard extends React.Component {
  state = {
    summaryData: [],
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = async () => {
    let summaryData = await fetchCountryData(this.props.countryCode);
    if (summaryData != undefined) {
      this.setState({ summaryData });
    }
  };

  render() {
    const { summaryData } = this.state;
    console.log(summaryData);
    if (!summaryData.totalConfirmed) {
      return "Loading";
    }
    return (
      <Row noGutters>
        <Col md={4}>
          <Card className="numberCard" style={{ borderColor: "orange" }}>
            <h2 className="numberText">
              <CountUp
                start={0}
                end={summaryData.totalConfirmed}
                duration={1.5}
                separator=","
              />
            </h2>

            <h4>Confirmed</h4>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="numberCard" style={{ borderColor: "green" }}>
            <h2 className="numberText">
              <CountUp
                start={0}
                end={summaryData.totalRecovered}
                duration={1.5}
                separator=","
              />
            </h2>

            <h4>Recovered</h4>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="numberCard" style={{ borderColor: "red" }}>
            <h2 className="numberText">
              <CountUp
                start={0}
                end={summaryData.totalDeaths}
                duration={1.5}
                separator=","
              />
            </h2>
            <h4>Deaths</h4>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default NumberBoard;

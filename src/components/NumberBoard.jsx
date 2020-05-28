import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";

const NumberBoard = (props) => {
  if (!props.data.totalConfirmed) {
    return "Loading";
  }
  return (
    <Row noGutters>
      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "orange" }}>
          <h2 className="numberText">
            <CountUp
              start={0}
              end={props.data.totalConfirmed}
              duration={1.5}
              separator=","
            />
          </h2>

          <h4 className="deltaText" style={{ color: "darkorange" }}>
            +
            <CountUp
              start={0}
              end={props.data.newConfirmed}
              duration={1.5}
              separator=","
            />
          </h4>
          <h4>Confirmed</h4>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "green" }}>
          <h2 className="numberText">
            <CountUp
              start={0}
              end={props.data.totalRecovered}
              duration={1.5}
              separator=","
            />
          </h2>
          <h4 className="deltaText" style={{ color: "green" }}>
            +
            <CountUp
              start={0}
              end={props.data.newRecovered}
              duration={1.5}
              separator=","
            />
          </h4>
          <h4>Recovered</h4>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "red" }}>
          <h2 className="numberText">
            <CountUp
              start={0}
              end={props.data.totalDeaths}
              duration={1.5}
              separator=","
            />
          </h2>
          <h4 className="deltaText" style={{ color: "red" }}>
            +
            <CountUp
              start={0}
              end={props.data.newDeaths}
              duration={1.5}
              separator=","
            />
          </h4>
          <h4>Deaths</h4>
        </Card>
      </Col>
    </Row>
  );
};

export default NumberBoard;

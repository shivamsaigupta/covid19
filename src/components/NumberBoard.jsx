import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const NumberBoard = (props) => {
  return (
    <Row noGutters>
      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "yellow" }}>
          <h2>{props.data.totalConfirmed}</h2>
          <h4>Cases</h4>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "green" }}>
          <h2>{props.data.totalRecovered}</h2>
          <h4>Recovered</h4>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="numberCard" style={{ borderColor: "red" }}>
          <h2>{props.data.totalDeaths}</h2>
          <h4>Deaths</h4>
        </Card>
      </Col>
    </Row>
  );
};

export default NumberBoard;

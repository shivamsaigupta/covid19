import React from "react";
import { Card } from "react-bootstrap";

const Header = (props) => {
  return (
    <Card style={{ padding: "2% 0 2% 0", backgroundColor: "black" }}>
      <h1 className="headerText">Covid-19 Dashboard | {props.countryCode}</h1>
    </Card>
  );
};

export default Header;

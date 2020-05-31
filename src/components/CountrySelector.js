import React from "react";
import { fetchCountries } from "../api";
import { Form } from "react-bootstrap";

class CountrySelector extends React.Component {
  state = {
    selectedCountry: "",
    countryList: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchCountries();
    if (fetchedData.length > 0) {
      this.setState({ countryList: fetchedData });
    }
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.props.onSubmit(e.target.value);
    this.setState({ selectedCountry: e.target.value });
  };

  renderCountries = () => {
    const { countryList } = this.state;
    let output;
    if (countryList.length > 0) {
      output = countryList.map((country) => {
        return (
          <option key={country.ISO2} value={country.ISO2}>
            {country.Country}
          </option>
        );
      });
    } else {
      output = <option>Loading...</option>;
    }
    return output;
  };

  render() {
    return (
      <Form>
        <Form.Group
          onChange={this.onChange}
          value={this.state.selectedCountry}
          controlId="countryForm.SelectCustom"
        >
          <Form.Control as="select" custom>
            {this.renderCountries()}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default CountrySelector;

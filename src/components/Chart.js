import React from "react";
import { fetchDailyUpdate } from "../api";
import { Line } from "react-chartjs-2";
import moment from "moment";

class Chart extends React.Component {
  state = {
    dailyData: [],
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.countryCode !== this.props.countryCode) {
      this.loadData();
    }
  }

  loadData = async () => {
    let dailyData = await fetchDailyUpdate(this.props.countryCode);
    if (dailyData != undefined) {
      this.setState({ dailyData });
    }
  };

  render() {
    const { dailyData } = this.state;
    const data = {
      labels: dailyData.map((data) => moment(data.Date).format("DD/MM/YYYY")),
      datasets: [
        {
          data: dailyData.map((data) => data.Confirmed),
          label: "Confirmed",
          borderColor: "green",
          spanGaps: true,
          fill: true,
        },
        {
          data: dailyData.map((data) => data.Recovered),
          label: "Recovered",
          borderColor: "orange",
          spanGaps: true,
          fill: true,
        },
        {
          data: dailyData.map((data) => data.Deaths),
          label: "Deaths",
          borderColor: "red",
          backgroundColor: "red",
          spanGaps: true,
          fill: true,
        },
      ],
    };
    return <div>{dailyData.length > 1 ? <Line data={data} /> : null}</div>;
  }
}

export default Chart;

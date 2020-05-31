import React from "react";
import { fetchDailyUpdate } from "../api";
import { Line } from "react-chartjs-2";
import moment from "moment";

class Chart extends React.Component {
  state = {
    dailyData: [],
  };

  async componentDidMount() {
    let dailyData = await fetchDailyUpdate();
    if (dailyData != undefined) {
      this.setState({ dailyData });
      console.log(this.state.dailyData);
      console.log(
        this.state.dailyData.map((data) =>
          moment(data.Date).format("DD/MM/YYYY")
        )
      );
    }
  }

  render() {
    const { dailyData } = this.state;
    const data = {
      labels: dailyData.map((data) => moment(data.Date).format("DD/MM/YYYY")),
      datasets: [
        {
          data: dailyData.map((data) => data.Confirmed),
          label: "Confirmed",
          borderColor: "green",
          fill: true,
        },
        {
          data: dailyData.map((data) => data.Recovered),
          label: "Recovered",
          borderColor: "orange",
          fill: true,
        },
        {
          data: dailyData.map((data) => data.Deaths),
          label: "Deaths",
          borderColor: "red",
          backgroundColor: "white",
          fill: true,
        },
      ],
    };
    return <div>{dailyData.length > 1 ? <Line data={data} /> : null}</div>;
  }
}

export default Chart;

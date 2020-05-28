import axios from "axios";
import axiosRetry from "axios-retry";

const summaryUrl = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: {
          TotalConfirmed,
          TotalDeaths,
          TotalRecovered,
          NewConfirmed,
          NewDeaths,
          NewRecovered,
        },
      },
    } = await axios.get(summaryUrl);

    const summaryData = {
      totalConfirmed: TotalConfirmed,
      totalDeaths: TotalDeaths,
      totalRecovered: TotalRecovered,
      newConfirmed: NewConfirmed,
      newDeaths: NewDeaths,
      newRecovered: NewRecovered,
    };

    return summaryData;
  } catch (error) {
    console.log(error);
  }
};

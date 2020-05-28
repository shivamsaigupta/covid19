import axios from "axios";

const summaryUrl = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: { TotalConfirmed, TotalDeaths, TotalRecovered },
      },
    } = await axios.get(summaryUrl);

    const summaryData = {
      totalConfirmed: TotalConfirmed,
      totalDeaths: TotalDeaths,
      totalRecovered: TotalRecovered,
    };

    return summaryData;
  } catch (error) {
    console.log(error);
  }
};

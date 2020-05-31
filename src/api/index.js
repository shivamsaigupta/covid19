import axios from "axios";
import axiosRetry from "axios-retry";

const summaryUrl = "https://api.covid19api.com/summary";
const countriesUrl = "https://covid19.mathdro.id/api/countries/";
const countrySpecificUrl = "https://api.covid19api.com/dayone/country/";

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

export const fetchCountryData = async (countryCode) => {
  try {
    const { data } = await axios.get(
      "https://covid19.mathdro.id/api/countries/" + countryCode
    );
    const modifiedData = {
      totalConfirmed: data.confirmed.value,
      totalDeaths: data.deaths.value,
      totalRecovered: data.recovered.value,
      newConfirmed: 0,
      newDeaths: 0,
      newRecovered: 0,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyUpdate = async (countryCode) => {
  try {
    const { data } = await axios.get(countrySpecificUrl + countryCode);
    return data;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(countriesUrl);
    console.log("data ", countries);
    return countries;
  } catch (error) {}
};

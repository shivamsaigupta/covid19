import axios from "axios";
import axiosRetry from "axios-retry";

const summaryUrl = "https://api.covid19api.com/summary";
const countriesUrl = "https://api.covid19api.com/countries";
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
    const {
      data: { Countries },
    } = await axios.get(summaryUrl);

    const filteredCountryArr = Countries.filter(
      (country) => country.CountryCode === countryCode
    );

    if (filteredCountryArr > 0) {
      const countrySummary = filteredCountryArr[0];

      const summaryData = {
        totalConfirmed: countrySummary.TotalConfirmed,
        totalDeaths: countrySummary.TotalDeaths,
        totalRecovered: countrySummary.TotalRecovered,
        newConfirmed: countrySummary.NewConfirmed,
        newDeaths: countrySummary.NewDeaths,
        newRecovered: countrySummary.NewRecovered,
      };

      return summaryData;
    }
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
    const { data } = await axios.get(countriesUrl);
    return data;
  } catch (error) {}
};

import {
  START_FETCHING_COUNTRIES,
  FETCHING_COUNTRIES_SUCCEED,
  FETCHING_COUNTRIES_FAILD,
  fetchingCountriesFaild,
  fetchingCountriesSucceed,
  startFetchingCountries,
} from './countriesActions';

const initState = {
  loading: false,
  countries: [],
  error: '',
};

const countriesReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_COUNTRIES_SUCCEED:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case FETCHING_COUNTRIES_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchCountries = () => async (dispatch) => {
  dispatch(startFetchingCountries());
  await fetch('https://disease.sh/v3/covid-19/countries')
    .then((res) => res.json())
    .then((countries) => {
      const selectedCountries = countries.map((country) => {
        const { _id } = country.countryInfo;
        return {
          id: parseInt(_id, 10),
          name: country.country,
          flag: country.countryInfo.flag,
          deaths: country.deaths,
          continent: country.continent,
        };
      });
      dispatch(fetchingCountriesSucceed(selectedCountries));
    })
    .catch((err) => dispatch(fetchingCountriesFaild(err)));
};

export default countriesReducer;

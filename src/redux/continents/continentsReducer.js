import {
  START_FETCHING_CONTINENTS,
  FETCHING_CONTINENTS_SUCCEED,
  FETCHING_CONTINENTS_FAILD,
  GET_SINGLE_CONTINENT,
  fetchingContinentsFaild,
  fetchingContinentsSucceed,
  startFetchingContinents,
} from './continentsActions';

const initState = {
  loading: false,
  continents: [],
  continent: {},
  error: '',
};

const continentsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_CONTINENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_CONTINENTS_SUCCEED:
      return {
        ...state,
        loading: false,
        continents: action.payload,
      };
    case FETCHING_CONTINENTS_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_CONTINENT:
      return {
        ...state,
        continent: action.payload,
      };
    default:
      return state;
  }
};
export const fetchContinents = () => async (dispatch) => {
  dispatch(startFetchingContinents());
  await fetch('https://disease.sh/v3/covid-19/continents')
    .then((res) => res.json())
    .then((continent) => {
      const selectedContinent = continent.map((continent) => ({
        name: continent.continent,
        deaths: continent.deaths,
      }));
      dispatch(fetchingContinentsSucceed(selectedContinent));
    })
    .catch((err) => dispatch(fetchingContinentsFaild(err)));
};

export default continentsReducer;

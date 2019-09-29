import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = (rocketId) => ({
  type: ACTIONS.REQUEST_ROCKET,
  rocketId,
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = ({ dispatch, rocketId }) => {
  dispatch(requestRocket(rocketId));
  return RocketService.get(rocketId).then(response => dispatch(receiveRocket(response)));
};

const shouldFetchRocket = ({ rocketCollection, rocketId }) =>
  !rocketCollection || !rocketCollection.fetching || !rocketCollection.rockets[rocketId];

export const fetchRocketIfNeeded = ({ dispatch, rocketCollection, rocketId }) =>
  shouldFetchRocket({ rocketCollection, rocketId }) && fetchRocket({ dispatch, rocketId });

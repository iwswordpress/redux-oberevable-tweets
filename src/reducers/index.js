import { combineReducers } from 'redux';
import { FETCH_TWEETS, FETCH_TWEETS_FULFILLED } from '../actions';

const tweets = (tweets = [], action) => {
  if (action.type === FETCH_TWEETS_FULFILLED) {
    return action.payload.tweets;
  }
  return tweets;
};

const status = (status = 'NOT_LOADED', action) => {
  if (action.type === FETCH_TWEETS) {
    return 'LOADING';
  }

  if (action.type === FETCH_TWEETS_FULFILLED) {
    return 'LOADED';
  }

  return status;
};

export default combineReducers({
  tweets,
  status,
});

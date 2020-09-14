export const FETCH_TWEETS = 'FETCH_TWEETS';
export const FETCH_TWEETS_FULFILLED = 'FETCH_TWEETS_FULFILLED';

export const fetchTweets = () => ({ type: FETCH_TWEETS });

export const fetchTweetsFulfilled = (payload) => ({
  type: FETCH_TWEETS_FULFILLED,
  payload,
});

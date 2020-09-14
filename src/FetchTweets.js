import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from './actions';

const FetchTweets = ({ fetchTweets }) => {
  return (
    <section className="FetchTweets">
      <button onClick={fetchTweets}>Fetch Tweets</button>
    </section>
  );
};

export default connect(
  null,
  { fetchTweets },
)(FetchTweets);

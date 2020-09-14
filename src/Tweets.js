import React from 'react';
import { connect } from 'react-redux';

import Tweet from './Tweet';

const Tweets = ({ tweets = [] }) => {
  console.log("[TWEETS] ", tweets);
  return (
    <section className="Tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { tweets: state.tweets };
};

export default connect(mapStateToProps)(Tweets);

import React from 'react';

const Tweet = ({ tweet }) => {
  console.log('[TWEET] ', tweet);
  return (
    <article className="Tweet">
      <header>
        <h3>
          {tweet.id} - {tweet.city}
        </h3>
        <p>
          {' '}
          {tweet.latitude} : {tweet.longitude}
        </p>
      </header>
    </article>
  );
};

export default Tweet;

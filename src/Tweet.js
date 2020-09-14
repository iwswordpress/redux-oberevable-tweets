import React from 'react';

const Tweet = ({ tweet }) => {
  console.log('[TWEET] ', tweet);
  return (
    <article className="Tweet">
      <header>
        <p>
          {tweet.id} writes at {tweet.created_at}{' '}
        </p>
        <p>{tweet.text}</p>
      </header>
    </article>
  );
};

export default Tweet;

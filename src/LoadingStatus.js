import React from 'react';
import { connect } from 'react-redux';

const LoadingStatus = ({ status, children }) => {
  if (status === 'LOADING') {
    return (
      <section className="FetchTweets">
        <button disabled>Loading…</button>
      </section>
    );
  }

  return <>{children}</>;
};

export default connect(({ status }) => ({ status }))(LoadingStatus);

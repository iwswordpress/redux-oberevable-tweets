import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epic';
import FetchTweets from './FetchTweets';
import Tweets from './Tweets';
import LoadingStatus from './LoadingStatus';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
      <LoadingStatus>
        <FetchTweets />
      </LoadingStatus>
      <Tweets />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);

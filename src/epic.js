import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { FETCH_TWEETS, fetchTweetsFulfilled } from './actions';

const fetchTweetsEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_TWEETS),
    mergeMap((action) =>
      ajax
        .getJSON('https://tweet-stream.glitch.me/api/tweets')
        .pipe(map((response) => fetchTweetsFulfilled(response))),
    ),
  );

export default fetchTweetsEpic;

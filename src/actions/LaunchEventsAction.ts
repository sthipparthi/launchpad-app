import axios from 'axios';
import { ActionTypes } from './ActionTypes';
import { Dispatch } from 'redux';


/** 
 * This is the action creator for fetching launch events from the API
 */
export const fetchLaunchEvents = () => {
  return async (dispatch: Dispatch) => {
     const response = await axios.get(
      "https://newsapi.org/v2/everything?q=isro&from=2024-07-12&sortBy=publishedAt&apiKey=8a7631d9bdb14632914e9c01e1c366fc"
    ).then((response) => {
      const data = response.data;
      console.log(data.status);
      dispatch(launchEventsAction(data.articles));
    }).catch((error) => {
      console.log(error);
    });
  }
};

export const launchEventsAction = (articles: any) => {
  return {
    type: ActionTypes.SET_LAUNCH_EVENTS,
    payload: articles
  }
}
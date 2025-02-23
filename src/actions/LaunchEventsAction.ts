import axios from 'axios';
import { ActionTypes } from './ActionTypes';
import { Dispatch } from 'redux';

export const fetchLaunchEvents = () => {
  return async (dispatch: Dispatch) => {
     const response = await axios.get(
      "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=0&ordering=-published_at"
    ).then((response) => {
      const data = response.data;
      console.log(data.status);
      dispatch(launchEventsAction(data.results));
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
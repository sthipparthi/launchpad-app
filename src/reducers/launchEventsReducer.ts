import { LaunchEventState } from "../state/types/LaunchEvent";

function launchEventsReducer(state: LaunchEventState = { events: [] }, action: any) {
  switch (action.type) {
    case "SET_LAUNCH_EVENTS":
      console.log("SET_LAUNCH_EVENTS");
      return { ...state, events: action.payload };
    default:
      console.log("Default");
      return state;
  }
}

export default launchEventsReducer;
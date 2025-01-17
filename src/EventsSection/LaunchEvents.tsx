import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import "./LaunchEvents.css";
import { fetchLaunchEvents } from "../actions/LaunchEventsAction";
import { AppDispatch } from "../state/store";

function LaunchEvents() {
  const dispatchLaunchEvents = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log('Component rendered or updated');
    dispatchLaunchEvents(fetchLaunchEvents());
  }, [dispatchLaunchEvents]);

  const launchEvents = useSelector((state: RootState) => state.launchEvents);

  return (
    <div className="carousel-container">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        {launchEvents.events.slice(0, 10).map((article, index) => (
          <div key={index} className="launch-events-container">
            <h4 className="event-title">{article.published_at}: {article.title}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default LaunchEvents;
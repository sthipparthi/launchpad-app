import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../launch-video-logo.png";
import "./headers.css";
import launchVideo from "../launchvideo.mp4";

function LaunchHeaders() {
  return (

    <div className="header-container">
      <img src={logo} className="logo" alt="logo" />
      <video className="launch-video" autoPlay loop muted playsInline onLoadedMetadata={(e) => {
        (e.currentTarget as HTMLVideoElement).playbackRate = 0.25;
      }}>
        <source src={launchVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default LaunchHeaders;
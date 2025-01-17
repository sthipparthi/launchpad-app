import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../launch-video-logo.png";
import "./headers.css";
import launchVideo from "../launchvideo.mp4";

function LaunchHeaders() {
  return (
    <header className="header-container">
      <div className="video-container">
        <video className="launch-video" autoPlay loop muted playsInline onLoadedMetadata={(e) => {
          (e.currentTarget as HTMLVideoElement).playbackRate = 0.25;
        }}>
          <source src={launchVideo} type="video/mp4" />
        </video>
      </div>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default LaunchHeaders;
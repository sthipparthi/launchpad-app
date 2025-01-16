import LaunchEvents from "./EventsSection/LaunchEvents";
import LaunchHeaders from "./headers/headers";
import Agencies from "./AgenciesSection/Agencies";
import LaunchPadAtlas from "./AtlasSection/LaunchPadAtlas";
import "./App.css";
import ISROModal from "./AgenciesSection/ISRO/isro-modal";

function App() {
  return (
    <div>
      <div className="container">
        <LaunchHeaders />
        <LaunchEvents />
        <Agencies />
        <LaunchPadAtlas />
      </div>
      
      <ISROModal />
    </div>
  );
}

export default App;

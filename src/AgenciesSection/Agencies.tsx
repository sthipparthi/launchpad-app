import ISROAgencyCard from "./ISRO/ISRO";
import NASAAgencyCard from "./NASA/NASA";
import CNSAAgencyCard from "./CNSA/CNSA";
import RSAAgencyCard from "./RSA/RSA";
import JAXAgencyCard from "./JAXA/JAXA";
import ESAgencyCard from "./ESA/ESA";
import "./Agency.css";

function Agencies() {
    return (
        <div>
            <h1>Agencies</h1>
            <div className="agencies-container">
                <ISROAgencyCard />
                <NASAAgencyCard />
                <CNSAAgencyCard />
                <RSAAgencyCard />
                <JAXAgencyCard />
                <ESAgencyCard />
            </div>
        </div>
    );
}

export default Agencies;
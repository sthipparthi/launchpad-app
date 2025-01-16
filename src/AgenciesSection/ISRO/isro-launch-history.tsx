import "../../modal.css";

interface IsroLaunchHistoryProps {
    isOpen: boolean;
    onClose: () => void;
  }

const IsroLaunchHistory: React.FC<IsroLaunchHistoryProps> = ({ isOpen, onClose }) =>  {
    if(!isOpen) return null;

    return (
        <div className="modal">
            <h1>ISRO Launch History</h1>

            <h2>Early Years and Initial Launches</h2>
            <ul>
                <li>
                    <strong>Rohini Satellite Series (1980s):</strong>
                    <ul>
                        <li>
                            <strong>First Satellite Launch Vehicle (SLV):</strong> The first successful launch was of the Rohini-1 satellite in 1980 using the SLV-3.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Augmented Satellite Launch Vehicle (ASLV):</strong>
                    <ul>
                        <li>
                            <strong>ASLV Program:</strong> The ASLV was developed in the 1980s to improve payload capacity. Successful launches include ASLV-D3 (1992) and ASLV-D4 (1994).
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Polar Satellite Launch Vehicle (PSLV) Era</h2>
            <ul>
                <li>
                    <strong>PSLV Development and Success:</strong>
                    <ul>
                        <li>
                            <strong>First Successful PSLV Launch:</strong> The PSLV-D2 in 1994 successfully placed the IRS-P2 satellite in orbit.
                        </li>
                        <li>
                            <strong>Notable PSLV Missions:</strong>
                            <ul>
                                <li>
                                    <strong>PSLV-C11/Chandrayaan-1 (2008):</strong> India’s first lunar mission.
                                </li>
                                <li>
                                    <strong>PSLV-C37 (2017):</strong> Set a world record by launching 104 satellites in a single mission.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Geosynchronous Satellite Launch Vehicle (GSLV) and Mark III</h2>
            <ul>
                <li>
                    <strong>GSLV Development:</strong>
                    <ul>
                        <li>
                            <strong>First GSLV Launch:</strong> The GSLV-D1 in 2001.
                        </li>
                        <li>
                            <strong>Notable Missions:</strong>
                            <ul>
                                <li>
                                    <strong>GSLV-D5 (2014):</strong> Successful deployment of the GSAT-14 satellite.
                                </li>
                                <li>
                                    <strong>GSLV-Mk III-D1 (2017):</strong> Launched GSAT-19, marking a new era in ISRO’s heavy-lift capabilities.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>GSLV-Mk III:</strong>
                    <ul>
                        <li>
                            <strong>Chandrayaan-2 (2019):</strong> India's second lunar exploration mission.
                        </li>
                        <li>
                            <strong>Gaganyaan:</strong> Planned human spaceflight mission using the GSLV-Mk III.
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Mars Orbiter Mission (Mangalyaan)</h2>
            <ul>
                <li>
                    <strong>PSLV-C25/Mars Orbiter Mission (MOM) (2013):</strong> India’s first interplanetary mission, making ISRO the fourth space agency to reach Mars and the first to do so on its maiden attempt.
                </li>
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default IsroLaunchHistory;
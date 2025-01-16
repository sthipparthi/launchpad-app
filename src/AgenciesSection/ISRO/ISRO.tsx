import { AppDispatch } from "../../state/store";
import "./ISRO.css";
import { useDispatch } from "react-redux";
import { openModal } from '../../actions/launch-pad-actions';


function ISROAgencyCard() {
  const dispatchModal = useDispatch<AppDispatch>();
  
  const handleOpenModal = (): void => {
    dispatchModal(openModal());
  };
  
  return (
    <div className="agency-card agency-card-logo-isro">
      <div className="agency-info" onClick={handleOpenModal}>
        <p>Indian Space Research Organisation, is India's national space agency, renowned for its advanced capabilities in space technology and its significant achievements in space exploration. </p>
      </div>
    </div>
  );
}

export default ISROAgencyCard;
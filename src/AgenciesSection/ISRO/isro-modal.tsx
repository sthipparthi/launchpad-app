import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { AppDispatch } from "../../state/store";
import { closeModal } from '../../actions/launch-pad-actions';
import IsroLaunchHistory from "./isro-launch-history";
import "./ISRO.css";

function ISROModal() {
    const isModalOpen: boolean = useSelector((state: RootState) => state.modal.modalIsOpen);
    const dispatchModal = useDispatch<AppDispatch>();

    const handleCloseModal = (): void => {
        document.body.classList.remove('no-scroll');
        dispatchModal(closeModal());
      };
    
    if(isModalOpen) {
        document.body.classList.add('no-scroll');
    }
    if(!isModalOpen) {
        document.body.classList.remove('no-scroll');
        return null;
    }

    return (
        <div className="modal-container">
            <IsroLaunchHistory isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default ISROModal;
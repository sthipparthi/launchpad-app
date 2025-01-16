import { initialModalState } from '../state/types/LaunchEvent';
import ActionTypes from '../actions/ActionTypes';


function modalReducer(state = initialModalState, action: any) {
    const mainContent = document.querySelector('.main-container');
    switch(action.type) {
        case ActionTypes.OPEN_MODAL:
            console.log("OPEN_MODAL");
            if (mainContent) {
                mainContent.classList.add('blur-effect');
            }
            return {
                ...state,
                modalIsOpen: true
            }
        case ActionTypes.CLOSE_MODAL:
            console.log("CLOSE_MODAL");
            if (mainContent) {
                mainContent.classList.remove('blur-effect');
            }
            return {
                ...state,
                modalIsOpen: false
            }
        default:
            if (mainContent) {
                mainContent.classList.remove('blur-effect');
            }
            return state;
    }
}

export default modalReducer;
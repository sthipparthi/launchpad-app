interface LaunchEvent {
    title: string;
    url: string;
    published_at: string;
    image_url: string;
}

interface LaunchEventState {
    events: LaunchEvent[];
}

interface modalState {
    modalIsOpen: boolean;
}

const initialModalState: modalState = {
    modalIsOpen: false
};

export { initialModalState };
export type { LaunchEventState, modalState };
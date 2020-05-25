import { CHANGE_DARK_MODE} from "../actions/types";

const darkReducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_DARK_MODE:
            return !state;
        default:
            return state
    }
};

export default darkReducer;
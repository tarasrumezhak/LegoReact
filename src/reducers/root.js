import { SET_FIGURES, CHANGE_DARK_MODE, SET_NEWS} from "../actions/types";

const initialState = {figures: [], isDarkMode: false, news: []};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FIGURES:
            return {...state, figures: action.figures};
        case CHANGE_DARK_MODE:
            return {...state, isDarkMode: !state.isDarkMode};
        case SET_NEWS:
            return {...state, news: action.news};
        default:
            return state
    }

}


import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import mainReducer from "./reducers/root";

const initialState = { isDarkMode: false, figures: [], news: []};

export default function configStore() {
    return createStore(
        mainReducer,
        initialState,
        compose(
            applyMiddleware(ReduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
import {setFigures, setNews} from "./creators";
import { CHANGE_DARK_MODE} from "./types";

const changeDark = () => {
    return {
        type: CHANGE_DARK_MODE
    }
};

const fetchFigures = () => (dispatch) => {
    fetch('http://localhost:3001/figures').then(resp => {
        return resp.json();
    }).then(body => {
        dispatch(setFigures(body));
    })
};

const fetchNews = () => (dispatch) => {
    fetch('http://localhost:3001/news').then(resp => {
        return resp.json();
    }).then(body => {
        dispatch(setNews(body));
    })
};

export {changeDark, fetchFigures, fetchNews}
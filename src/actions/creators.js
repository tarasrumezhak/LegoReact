import { CHANGE_DARK_MODE, SET_FIGURES, SET_NEWS} from "./types";

const  changeDarkMode = (isDarkMode) => ({type: CHANGE_DARK_MODE, isDarkMode});

const setFigures = (figures) => ({type: SET_FIGURES, figures});

const setNews = (news) => ({type: SET_NEWS, news});

export { changeDarkMode, setFigures, setNews};

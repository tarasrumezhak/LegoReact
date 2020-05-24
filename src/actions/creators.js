import { CHANGE_DARK_MODE} from "./types";

const  changeDarkMode = (isDarkMode) => ({type: CHANGE_DARK_MODE, isDarkMode});

// let action = changeDarkMode(false);

export { changeDarkMode };

// store.dispatch(action);
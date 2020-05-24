// import {changeDarkMode} from "./creators";
import { CHANGE_DARK_MODE} from "./types";

export const changeDark = () => {
    return {
        type: CHANGE_DARK_MODE
    }
}
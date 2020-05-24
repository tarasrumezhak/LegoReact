import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as RebelIcon} from "./icons/rebel.svg";
import {ReactComponent as DarkIcon} from "./icons/empire.svg";
import {changeDarkMode} from "./actions/creators";
import {connect, useDispatch} from "react-redux";
import React from "react";
import {changeDark} from "./actions";

function DarkMode(props) {
    // const [isDarkMode, setDarkMode] = useState(false);
    // function handleClick() {
    //     setDarkMode(!isDarkMode);
    //     props.onClick();
    // }
    const dispatch = useDispatch();
    return(
        <Tooltip title="Dark Mode">
            <MenuItem size="small" aria-label="Dark Mode"
                      onClick={() => {
                          dispatch(changeDark())
                      }}
                      style={{width: '10vw'}}>
                {props.isDarkMode ?
                    <SvgIcon component={RebelIcon} viewBox={"0, 0, 300, 300"} style={{fontSize: 45}}/> :
                    <SvgIcon component={DarkIcon} viewBox={"0, 0, 600, 600"} style={{fontSize: 45}}/>
                }
            </MenuItem>
        </Tooltip>
    )
}

const mapStateToProps = (state) => ({isDarkMode: state.isDarkMode});
const mapDispatchToProps = (dispatch) => ({changeDarkMode: (isDarkMode) => dispatch(changeDarkMode(isDarkMode))});
export default connect(mapStateToProps, mapDispatchToProps)(DarkMode);
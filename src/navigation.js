import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { ReactComponent as LegoLogo } from './icons/lego-2-logo-svg-vector.svg'
import { ReactComponent as LoginIcon } from './icons/emoticon.svg'
import {ReactComponent as DarkIcon} from "./icons/empire.svg";
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import {ReactComponent as RebelIcon} from "./icons/rebel.svg";
import {ReactComponent as EvilIcon} from "./icons/evil2.svg";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    appBar: {
        alignItems: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
        marginRight: "12vw",
        marginLeft: "10vw",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

function LoginButton(props) {
    return(
        <Tooltip title="Login">
        <MenuItem size="small" aria-label="Login">
            {props.darkMode ?
                <SvgIcon component={EvilIcon} viewBox={"0, 0, 500, 500"} style={{fontSize: 45}} /> :
                <SvgIcon component={LoginIcon} viewBox={"0, 0, 500, 500"} style={{fontSize: 45}}/>
            }
        </MenuItem>
        </Tooltip>
    )
}

function DarkMode(props) {
    const [darkMode, setDarkMode] = useState(false);
    function handleClick() {
        setDarkMode(!darkMode);
        props.onClick();
    }
    return(
        <Tooltip title="Dark Mode">
            <MenuItem size="small" aria-label="Dark Mode" onClick={handleClick}>
                {darkMode ?
                    <SvgIcon component={RebelIcon} viewBox={"0, 0, 300, 300"} style={{fontSize: 45}}/> :
                    <SvgIcon component={DarkIcon} viewBox={"0, 0, 600, 600"} style={{fontSize: 45}}/>
                }
            </MenuItem>
        </Tooltip>
    )
}


export default function Navigation(props) {
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);
    function handleDark() {
        setDarkMode(!darkMode);
        console.log(darkMode);
        props.onClickDark()
    }
    return (
        <AppBar position="static" className={classes.appBar} style={{background: darkMode ? "#8b0000" : "#4791db"}}>
            <Toolbar>
                <SvgIcon component={LegoLogo}  viewBox={"0, 0, 640, 640"} style={{fontSize: 50, marginRight: "0.5vw"}}/>
                <Typography variant="h6">
                     Minifigures
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Link to='login'><LoginButton darkMode={darkMode}/></Link>
                <DarkMode onClick={handleDark}/>
            </Toolbar>
        </AppBar>
    )
}



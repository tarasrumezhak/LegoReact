import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./navigation";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { ReactComponent as ProfileIcon } from './icons/justice-league.svg'
import {ReactComponent as CollectionIcon} from "./icons/shapes.svg";
import {ReactComponent as NewsIcon} from "./icons/news.svg";
import {ReactComponent as HistoryIcon} from "./icons/history.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import MainBlock from "./mainBlock";
import Tops from "./tops";
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";
import {Provider, useSelector, useDispatch} from 'react-redux';
import { createStore } from'redux';
// import rootReducer from'./reducers/root';
import allReducers from "./reducers";
import { changeDark } from "./actions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        position: 'center',
        height: "70vh",
        width: "30vw",
        marginTop: "2vh",
        marginLeft: "2vw",
        marginRight: "2vw",
    },
    menu: {
        marginTop: "2vh",
        position: 'center',
        width: "10vw",
        height: "40vh",
    },
    menu2: {
        marginTop: "2vh",
        position: 'center',
        width: "10vw",
        height: "40vh",
    }
}));


function LeftMenu(props) {
    return (
        <Switch>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                className={props.styles}
                color={props.isDarkMode ? "secondary": "primary"}
            >
                <Button startIcon={<SvgIcon component={ProfileIcon} viewBox={"0, 0, 500, 500"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'profile'}>Profile</Button>
                <Button startIcon={<SvgIcon component={CollectionIcon} viewBox={"0, 0, 515, 515"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'collect'}>Collect</Button>
                <Button startIcon={<SvgIcon component={NewsIcon} viewBox={"0, 0, 550, 550"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}}>Latest</Button>
                <Button startIcon={<SvgIcon component={HistoryIcon} viewBox={"0, 0, 60, 60"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'history'}>History</Button>

            </ButtonGroup>
        </Switch>
    )
}

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    const classes = useStyles();
    // const [isDarkMode, setDarkMode] = useState(false);
    const isDarkMode = useSelector(state => state.isDarkMode);

    const theme = createMuiTheme({
        palette: {
            type: isDarkMode ? "dark" : "light",
        },
    });

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Paper style={{height: "100vh"}}>
                    <Grid container direction="column">
                        {/*<Grid item> <Navigation onClickDark={() => setDarkMode(!isDarkMode)} isDarkMode={isDarkMode}/></Grid>*/}
                        <Grid item> <Navigation isDarkMode={isDarkMode}/></Grid>

                        <Grid container justify="center">

                            <Grid item> <LeftMenu styles={classes.menu} isDarkMode={isDarkMode}/></Grid>
                            <Grid item> <MainBlock /></Grid>
                            <Grid item> <Tops styles={classes.menu2}/></Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
        </Router>
)
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
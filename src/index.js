import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./navigation";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainBlock from "./mainBlock";
import Tops from "./tops";
import { BrowserRouter as Router} from "react-router-dom";
import {Provider, useSelector} from 'react-redux';
import configStore from "./store";
import LeftMenu from "./leftMenu";

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


const store = configStore();

function App() {
    const classes = useStyles();
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
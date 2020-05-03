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
import SvgIcon from "@material-ui/core/SvgIcon";
import MainBlock from "./mainBlock";
import Tops from "./tops"

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
        <ButtonGroup
            orientation="vertical"
            color="primary"
            className={props.styles}
            color={props.darkMode ? "secondary": "primary"}
        >
            <Button startIcon={<SvgIcon component={ProfileIcon} viewBox={"0, 0, 500, 500"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}}>Profile</Button>
            <Button  startIcon={<SvgIcon component={CollectionIcon} viewBox={"0, 0, 515, 515"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}}>Collect</Button>
            <Button startIcon={<SvgIcon component={NewsIcon} viewBox={"0, 0, 550, 550"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}}>Latest</Button>
        </ButtonGroup>
    )
}

function App() {
    const classes = useStyles();
    const [darkMode, setDarkMode] = useState(false);
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light",
        },
    });
    // const lightTheme = createMuiTheme({});

    return (
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100vh"}}>
                <Grid container direction="column">
                    <Grid item> <Navigation onClickDark={() => setDarkMode(!darkMode)} darkMode={darkMode}/></Grid>  {/*onClickDark={setDarkMode(!darkMode)}*/}
                    <Grid container justify="center">

                        <Grid item> <LeftMenu styles={classes.menu} darkMode={darkMode}/></Grid>
                        <Grid item> <MainBlock /></Grid>
                        <Grid item> <Tops styles={classes.menu2}/></Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
)
    //     // <div className={classes.root}>
    //         {/*<Grid>*/}
    //         {/*    <Navigation />*/}
    //         {/*</Grid>*/}
    //         {/*<Grid container justify="center">*/}
    //         {/*    <LeftMenu styles={classes.menu}/>*/}
    //         {/*    <Paper className={classes.paper}  elevation={3}/>*/}
    //         {/*    <Menu styles={classes.menu2}/>*/}
    //         {/*</Grid>*/}
    //     {/*</div>*/}
    // // );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FigureCard from "./figureCard";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LogIn from "./login";
import Register from "./register";
import ProfileCard from "./profile";
import HistoryCard from "./history";

const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'center',
            height: "70vh",
            width: "30vw",
            marginTop: "2vh",
            marginLeft: "2vw",
            marginRight: "2vw",
            overflowX: "hidden",
            scrollbars: {
                width: "0px",
                background: "transparent",
            }
        },
 }
));

function BricksFeed() {
    return(
        <Grid container spacing={1} >
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/shower.jpg")} name="Shower Guy"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/hacker.jpg")} name="Girl Hacker"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/adventurer.png")} name="Adventurer"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/player.jpg")} name="Player"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/programmer.jpg")} name="Programmer"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/minifigure.jpg")} name="Brick Man"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/shower.jpg")} name="Shower Guy"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/shower.jpg")} name="Shower Guy"/></Grid>
            <Grid item sm={12} md={6} lg={4}><FigureCard image={require("./images/shower.jpg")} name="Shower Guy"/></Grid>
        </Grid>
    )

}

export default function MainBlock() {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}  elevation={3}>
            <Switch>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/profile' component={ProfileCard}/>
                {/*<Route exact path='/collect/${id}'><FigureCard image={require("./images/minifigure.jpg")} name={id}/></Route>*/}
                <Route exact path='/collect' component={BricksFeed} />
                <Route exact path='/gold'><FigureCard image={require("./images/gold.jpg")} name="Mr Gold"/></Route>
                <Route exact path='/batman'><FigureCard image={require("./images/batman.jpg")} name="Batman"/></Route>
                <Route exact path='/superman'><FigureCard image={require("./images/superman.jpg")} name="Superman"/></Route>
                <Route exact path='/gorlum'><FigureCard image={require("./images/gorlum.jpg")} name="Gorlum"/></Route>
                <Route exact path='/history' component={HistoryCard} />
                <Route exact path='/' component={BricksFeed} />
            </Switch>
         </Paper>
    )
}
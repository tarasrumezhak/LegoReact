import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./login";
import Register from "./register";
import ProfileCard from "./profile";
import HistoryCard from "./history";
import FigurePage from "./figurePage";
import BricksFeed from "./collect";
import newsFeed from "./newsFeed";
import Charts from "./charts";

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


export default function MainBlock() {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}  elevation={3}>
            <Switch>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/profile' component={ProfileCard}/>
                <Route exact path='/collect' component={BricksFeed} />
                <Route exact path='/gold'><FigurePage image={require("./images/gold.jpg")} name="Mr Gold"/></Route>
                <Route exact path='/batman'><FigurePage image={require("./images/batman.jpg")} name="Batman"/></Route>
                <Route exact path='/superman'><FigurePage image={require("./images/superman.jpg")} name="Superman"/></Route>
                <Route exact path='/gorlum'><FigurePage image={require("./images/gorlum.jpg")} name="Gorlum"/></Route>
                <Route exact path='/history' component={HistoryCard} />
                <Route exact path='/news' component={newsFeed} />
                <Route exact path='/charts' component={Charts} />
                <Route exact path='/' component={BricksFeed} />
            </Switch>
         </Paper>
    )
}
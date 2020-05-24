import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FigureCard from "./figureCard";
import {
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./login";
import Register from "./register";
import ProfileCard from "./profile";
import HistoryCard from "./history";
import FigurePage from "./figurePage";

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


class BricksFeed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            figures: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/figures")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        figures: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, figures } = this.state;
        console.log(this.state)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Grid container spacing={1} >
                    {figures.map(figure =>
                        <Grid item sm={12} md={6} lg={4}><FigureCard image={figure.photo} name={figure.name} series={figure.series} price={figure.price}/></Grid>
                    )}
                </Grid>
            );
        }
    }
}


export default function MainBlock() {
    const classes = useStyles();
    return(
        <Paper className={classes.paper}  elevation={3}>
            <Switch>
                <Route exact path='/login' component={LogIn}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/profile' component={ProfileCard}/>
                <Route exact path='/collect/${id}'><FigureCard image={require("./images/minifigure.jpg")}/></Route>
                <Route exact path='/collect' component={BricksFeed} />
                <Route exact path='/gold'><FigurePage image={require("./images/gold.jpg")} name="Mr Gold"/></Route>
                <Route exact path='/batman'><FigurePage image={require("./images/batman.jpg")} name="Batman"/></Route>
                <Route exact path='/superman'><FigurePage image={require("./images/superman.jpg")} name="Superman"/></Route>
                <Route exact path='/gorlum'><FigurePage image={require("./images/gorlum.jpg")} name="Gorlum"/></Route>
                <Route exact path='/history' component={HistoryCard} />
                <Route exact path='/' component={BricksFeed} />
            </Switch>
         </Paper>
    )
}
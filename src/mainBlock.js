import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FigureCard from "./figureCard";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
            <Grid container spacing={1} >
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>
                <Grid item sm={12} md={6} lg={4}><FigureCard/></Grid>

            </Grid>

         </Paper>
    )
}
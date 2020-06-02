import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


export default function Tops(props) {
    const classes = useStyles();
    const popular = ["Batman", "Superman", "Gorlum"];
    return (
        <Paper elevation={0} className={props.styles}>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Most Popular</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container direction={"column"}>
                            {popular.map(( item) =>
                                <Grid item>
                                    <Button component={Link} to={item.toLowerCase()}>
                                        <Typography>
                                            {item}
                                        </Typography>
                                    </Button>
                                </Grid>
                            )}
                        </Grid>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Most Expensive</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Button component={Link} to='gold'>
                            <Typography>
                                Mr. Gold 3K $
                            </Typography>
                        </Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </Paper>
    )
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import {ReactComponent as BatmanIcon} from "./icons/batman.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    }
}));

export default function ProfileCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="elevation" elevation={0}>
            <CardContent className={classes.content}>
                <Avatar className={classes.avatar}>
                    <BatmanIcon/>
                </Avatar>
                <Typography variant="h5" component="h2">
                    Taras Bricklover
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Expert
                </Typography>
                <Typography variant="body2" component="p">
                    Here will be my colections of minifigures
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to='collect'>Show collections</Button>
            </CardActions>
        </Card>
    );
}
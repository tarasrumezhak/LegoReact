import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 240,
    },
});

export default function NewsCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            <CardActions>
                    <Button size="small" color="primary" target='_blank' href={props.url}>
                        Buy
                    </Button>
            </CardActions>
        </Card>
    );
}
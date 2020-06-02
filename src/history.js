import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import YouTube from "react-youtube";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 240,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    youtube: {
        // width: 'auto',
    }
});

export default function HistoryCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/*<CardMedia*/}
                {/*    component="iframe"*/}
                {/*    // className={classes.media}*/}
                {/*    image="https://www.youtube.com/watch?v=NdDU_BBJW9Y"*/}
                {/*    title="Minifig"*/}
                {/*/>*/}

                <CardContent className={classes.content}>
                    <YouTube
                        videoId="NdDU_BBJW9Y"
                        className={classes.youtube}
                    />
                    <Typography gutterBottom variant="h5" component="h2">
                        The LEGO® Story
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Let's take a look back at its history with this short animated film.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
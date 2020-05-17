import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link, useRouteMatch} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 240,
    },
});

export default function FigureCard(props) {
    // const [state, setState] = React.useState({
    //     checked: false
    // });
    const [checked, setChecked] = React.useState(false);
    const classes = useStyles();
    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    let match = useRouteMatch();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // image={require("./images/shower.jpg")}
                    image={props.image}
                    title="Minifig"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                        style={{display: "flex"}}
                    />
                    <Typography variant="body2" color="textSecondary" component="p">
                        Series {props.series} LEGO Minifigure  - {props.price} € EUR
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                {/*<Button size="small" color="primary" component={Link} to={`${match.url}/${props.name.replace(' ', '_').toLowerCase()}`}>*/}
                {/*    Learn More*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    );
}
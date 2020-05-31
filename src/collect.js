import React, { useEffect, useState }from "react";
import Grid from "@material-ui/core/Grid";
import FigureCard from "./figureCard";
import { connect } from 'react-redux';
import { fetchFigures } from "./actions";

class BricksFeed extends  React.Component{

    componentDidMount() {
        this.props.fetchFigures();
    }


    render() {
        const {figures} = this.props;
        return (
            <Grid container spacing={1}>
                {figures.map(figure =>
                    <Grid item sm={12} md={6} lg={4}><FigureCard image={figure.photo} name={figure.name}
                                                                 series={figure.series} price={figure.price}/></Grid>
                )}
            </Grid>
        );

    }

}

const mapStateToProps = (state) => ({
    figures: state.figures,
});
const mapDispatchToProps = (dispatch) => ({
    fetchFigures: () => dispatch(fetchFigures()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BricksFeed)
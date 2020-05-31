import React, { useEffect, useState }from "react";
import Grid from "@material-ui/core/Grid";
import NewsCard from "./newsCard";
import { connect } from 'react-redux';
import { fetchNews } from "./actions";

class BricksFeed extends  React.Component{

    componentDidMount() {
        this.props.fetchNews();
    }


    render() {
        const {news} = this.props;
        return (
            <Grid container spacing={1}>
                {news.map(curr_news =>
                    <Grid item sm={12}><NewsCard  name={curr_news.name} text={curr_news.text} url={curr_news.url}/></Grid>
                )}
            </Grid>
        );

    }

}

const mapStateToProps = (state) => ({
    news: state.news,
});
const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BricksFeed)
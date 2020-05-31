import {Link, Switch} from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import {ReactComponent as ProfileIcon} from "./icons/justice-league.svg";
import {ReactComponent as CollectionIcon} from "./icons/shapes.svg";
import {ReactComponent as NewsIcon} from "./icons/news.svg";
import {ReactComponent as HistoryIcon} from "./icons/history.svg";
import {ReactComponent as ChartIcon} from "./icons/graphic.svg";
import React from "react";

export default function LeftMenu(props) {
    return (
        <Switch>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                className={props.styles}
                color={props.isDarkMode ? "secondary": "primary"}
            >
                <Button startIcon={<SvgIcon component={ProfileIcon} viewBox={"0, 0, 500, 500"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'profile'}>Profile</Button>
                <Button startIcon={<SvgIcon component={CollectionIcon} viewBox={"0, 0, 515, 515"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'collect'}>Collect</Button>
                <Button startIcon={<SvgIcon component={NewsIcon} viewBox={"0, 0, 550, 550"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'news'}>Latest</Button>
                <Button startIcon={<SvgIcon component={HistoryIcon} viewBox={"0, 0, 60, 60"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'history'}>History</Button>
                <Button startIcon={<SvgIcon component={ChartIcon} viewBox={"0, 0, 550, 550"} style={{fontSize: "3vmax"}}/>} style={{fontSize: "1vmax"}} component={Link} to={'charts'}>Charts</Button>
            </ButtonGroup>
        </Switch>
    )
}
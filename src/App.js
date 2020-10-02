import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Stack } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';

import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            announcement: ""
        }
    }

    componentDidMount() {

    }

    render() {

        const numericalSpacingStackTokens = { childrenGap: "0.75em" }
        const calloutProps = { gapSpace: 0 }
        const hostStyles = { root: { display: 'inline-block' } };

        return (
            <Router>
                <div className="container-fluid" style={{ backgroundColor: NeutralColors.black }}>
                    <div className="row vh-100">
                        <div className="col-auto h-100 d-none d-md-block">
                            <div className="row h-100">
                                <div className="col my-auto px-3 mh-100" style={{ overflowY: "auto" }}>
                                    <nav style={{ fontSize: FontSizes.size24 }}>
                                        <Stack verticalAlign="space-between" tokens={numericalSpacingStackTokens}>
                                            <TooltipHost content="Home" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Home" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Members and Divisons" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/members" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Teamwork" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="FIRST Robotics" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/competitions" style={{ color: "rgb(255,106,0)" }}>
                                                    <img className="d-block" src="img/FIRST_Vertical_RGB_reverse.png" width="28pt" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Robots" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/robots" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Robot" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Projects" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/projects" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="ClipboardList" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Flickr" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/https://flic.kr/ps/3b8mmU" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Album" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Social Media" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/social" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Share" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Contact" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/contact" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Headset" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Team Resources" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/resources" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Folder" />
                                                </Link>
                                            </TooltipHost>
                                            <TooltipHost content="Search" calloutProps={calloutProps} styles={hostStyles}>
                                                <Link to="/search" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Search" />
                                                </Link>
                                            </TooltipHost>
                                        </Stack>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col h-100 px-0" style={{ overflowY: "scroll" }}>
                            <div className="d-flex flex-column min-vh-100">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                </Switch>
                                <footer className="py-5 mx-0 mt-auto">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">About Us</h4>
                                                    <Link className="text-muted" to="team">Our Team</Link>
                                                    <Link className="text-muted" to="members">Our Members</Link>
                                                    <Link className="text-muted" to="robots">Our Robots</Link>
                                                    <Link className="text-muted" to="competitions">Competitions</Link>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">Community</h4>
                                                    <Link className="text-muted" to="news">Newsletter</Link>
                                                    <Link className="text-muted" to="blog">Blog</Link>
                                                    <Link className="text-muted" to="social">Social Media</Link>
                                                    <Link className="text-muted" to="projects">Projects</Link>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">Resources</h4>
                                                    <Link className="text-muted" to="calendar">Calendar</Link>
                                                    <Link className="text-muted" to="gallery">Gallery</Link>
                                                    <Link className="text-muted" to="more">More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-center pb-3">
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="https://github.com/team5599" data-toggle="tooltip" data-placement="bottom" title="GitHub"><FeatherIcon.GitHub /></Link>
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="https://www.instagram.com/sentinels_5599/" data-toggle="tooltip" data-placement="bottom" title="Instagram"><FeatherIcon.Instagram /></Link>
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="https://www.facebook.com/team5599sentinels" data-toggle="tooltip" data-placement="bottom" title="Facebook"><FeatherIcon.Facebook /></Link>
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="https://twitter.com/Sentinels5599" data-toggle="tooltip" data-placement="bottom" title="Twitter"><FeatherIcon.Twitter /></Link>
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="https://www.youtube.com/channel/UCALF3caI0F4WJfJisLFSBWQ" data-toggle="tooltip" data-placement="bottom" title="YouTube"><FeatherIcon.Youtube /></Link>
                                            <Link className="p-3 m-2 rounded-circle btn btn-outline-secondary" to="mailto:marketing.sentinels@gmail.com" data-toggle="tooltip" data-placement="bottom" title="Email"><FeatherIcon.Mail /></Link>
                                        </div>
                                        <div className="text-secondary">
                                            <p className="text-center pb-3">Copyright © 2020 BNCHS Sentinels</p>
                                            <p style={{ fontFamily: "Arial" }}><i>FIRST®</i>, <i>FIRST®</i> Robotics Competition, and <i>FIRST®</i> Tech Challenge, are registered trademarks of <i>FIRST®</i> (<Link to="www.firstinspires.org" className="text-muted">www.firstinspires.org</Link>) which is not overseeing, involved with, or responsible for this activity, product, or service.</p>
                                        </div>
                                        <div className="d-md-none" style={{ paddingBottom: "100px" }}>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </Router >
        );
    }
}

export default hot(module)(App);
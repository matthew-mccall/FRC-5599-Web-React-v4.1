import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Stack } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Members from "./Members"
import Robots from "./Robots"
import Social from "./Social"
import Competitions from './Competitions';
import Contact from './Contact';
import Projects from './Projects';
import Resources from './Resources';
import Search from './Search';
import $ from 'jquery';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            announcement: {}
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

                <div id="mobileMenu" className="d-none vh-100 p-5" style={{ backgroundColor: NeutralColors.black, zIndex: 100, overflowY: "scroll" }}>
                    <h1 className="display-4" style={{ color: NeutralColors.gray30 }}>Menu</h1>
                    <nav class="nav flex-column" style={{ fontSize: FontSizes.size24, color: NeutralColors.gray30 }}>
                        <div class="row" onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="col-auto">
                                <Icon iconName="ChromeClose" />
                            </div>
                            <div class="col">
                                Close
                            </div>
                        </div>
                        <a href="/" class="my-2" onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Home" />
                                </div>
                                <div class="col">
                                    Home
                                </div>
                            </div>
                        </a>
                        <a href="/members" class="my-2" onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Teamwork" />
                                </div>
                                <div class="col">
                                    Members
                                </div>
                            </div>
                        </a>
                        <a href="/competitions" class="my-2" onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row" onClick={() => {
                                $("#mobileMenu").addClass("d-none")
                            }}>
                                <div class="col-auto">
                                    <img src="img/FIRST_Vertical_RGB_reverse.png" width="24pt" alt="FIRST Logo"></img>
                                </div>
                                <div class="col">
                                    FIRST Robotics
                                </div>
                            </div>
                        </a>
                        <a href="/robots" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Robot" />
                                </div>
                                <div class="col">
                                    Robots
                                </div>
                            </div>
                        </a>
                        <a href="/projects" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="ClipboardList" />
                                </div>
                                <div class="col">
                                    Projects
                                </div>
                            </div>
                        </a>
                        <a href="https://flic.kr/ps/3b8mmU" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Album" />
                                </div>
                                <div class="col">
                                    Gallery
                                </div>
                            </div>
                        </a>
                        <a href="/social" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Share" />
                                </div>
                                <div class="col">
                                    Social Media
                                </div>
                            </div>
                        </a>
                        <a href="/contact" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Headset" />
                                </div>
                                <div class="col">
                                    Contact Us
                                </div>
                            </div>
                        </a>
                        <a href="/resources" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Folder" />
                                </div>
                                <div class="col">
                                    Resources
                                </div>
                            </div>
                        </a>
                        <a href="/search" class="my-2 " onClick={() => {
                            $("#mobileMenu").addClass("d-none")
                        }}>
                            <div class="row">
                                <div class="col-auto">
                                    <Icon iconName="Search" />
                                </div>
                                <div class="col">
                                    Search
                                </div>
                            </div>
                        </a>
                    </nav>
                </div>

                <div className="fixed-bottom d-md-none">
                    <div className="container-fluid" style={{ backgroundColor: NeutralColors.black }}>
                        <div id="bottomNav" className="row ms-fontSize-28 text-center py-2" style={{ fontSize: FontSizes.size24 }}>
                            <div className="col">
                                <Link to="/" style={{ color: "rgb(255,106,0)" }}>
                                    <Icon iconName="Home" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/robots" style={{ color: "rgb(255,106,0)" }}>
                                    <Icon iconName="Robot" />
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/social" style={{ color: "rgb(255,106,0)" }}>
                                    <Icon iconName="Share" />
                                </Link>
                            </div>
                            <div className="col d-none d-sm-block">
                                <Link to="/resources" style={{ color: "rgb(255,106,0)" }}>
                                    <Icon iconName="Folder" />
                                </Link>
                            </div>
                            <div className="col">
                                <Icon iconName="CollapseMenu" style={{ color: "rgb(255,106,0)" }} onClick={() => {
                                    $("#mobileMenu").removeClass("d-none")
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
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
                                                <a href="https://flic.kr/ps/3b8mmU" style={{ color: "rgb(255,106,0)" }}>
                                                    <Icon iconName="Album" />
                                                </a>
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
                        <div className="col h-100 px-0" style={{ overflowY: "scroll", overflowX: "hidden" }}>
                            <div className="d-flex flex-column min-vh-100">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/members" component={Members} />
                                    <Route path="/competitions" component={Competitions} />
                                    <Route path="/robots" component={Robots} />
                                    <Route path="/projects" component={Projects} />
                                    <Route path="/social" component={Social} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/resources" component={Resources} />
                                    <Route path="/search" component={Search} />
                                </Switch>
                                <footer className="py-5 mx-0 mt-auto">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">About Us</h4>
                                                    <Link className="text-muted" to="/team">Our Team</Link>
                                                    <Link className="text-muted" to="/members">Our Members</Link>
                                                    <Link className="text-muted" to="/robots">Our Robots</Link>
                                                    <Link className="text-muted" to="/competitions">Competitions</Link>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">Community</h4>
                                                    <Link className="text-muted" to="/social">Social Media</Link>
                                                    <Link className="text-muted" to="/projects">Projects</Link>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-4 pb-3">
                                                <div className="d-flex flex-column">
                                                    <h4 className="text-muted">Resources</h4>
                                                    <Link className="text-muted" to="/gallery">Gallery</Link>
                                                    <Link className="text-muted" to="/more">More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-center pb-3">
                                            <TooltipHost content="GitHub" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://github.com/team5599"><FeatherIcon.GitHub /></a>
                                            </TooltipHost>
                                            <TooltipHost content="Instagram" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.instagram.com/sentinels_5599/"><FeatherIcon.Instagram /></a>
                                            </TooltipHost>
                                            <TooltipHost content="Facebook" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.facebook.com/team5599sentinels"><FeatherIcon.Facebook /></a>
                                            </TooltipHost>
                                            <TooltipHost content="Twitter" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://twitter.com/Sentinels5599"><FeatherIcon.Twitter /></a>
                                            </TooltipHost>
                                            <TooltipHost content="YouTube" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.youtube.com/channel/UCALF3caI0F4WJfJisLFSBWQ"><FeatherIcon.Youtube /></a>
                                            </TooltipHost>
                                            <TooltipHost content="Email" calloutProps={calloutProps} styles={hostStyles}>
                                                <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="mailto:marketing.sentinels@gmail.com"><FeatherIcon.Mail /></a>
                                            </TooltipHost>
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
import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Icon } from '@fluentui/react/lib/Icon';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import { TeachingBubble } from '@fluentui/react/lib/TeachingBubble';
import { Text } from "@fluentui/react/lib/Text"
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
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
import $ from 'jquery';
import PageNotFound from './PageNotFound';
import ServerError from './ServerError';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            announcement: undefined,
            showMenu: false,
            showMenuHint: true
        }
    }

    componentDidMount() {

    }

    render() {

        const calloutProps = { gapSpace: 0 }
        const hostStyles = { root: { display: 'inline-block' } };
        const showMenu = this.state.showMenu
        const showMenuHint = this.state.showMenuHint

        return (
            <BrowserRouter>
                { showMenuHint &&
                    <TeachingBubble
                        target="#menubtn"
                        headline="The new navigation is down here"
                        onDismiss={() => {
                            this.setState({
                                showMenuHint: false
                            })
                        }}>
                        <Text>Click anywhere to dismiss</Text>
                    </TeachingBubble>
                }
                <div style={{ bottom: "0.75em", right: "0.75em", position: "fixed", zIndex: 201 }}>
                    <div className="m-5 d-inline-flex" onClick={() => {
                        this.setState({
                            showMenu: !this.state.showMenu
                        })
                    }}>
                        {showMenu
                            ? <div className="p-3 rounded-circle menubtn" style={{ backgroundColor: "red", color: NeutralColors.gray10 }}>
                                <FeatherIcon.X />
                            </div>
                            : <div id="menubtn" className="p-3 rounded-circle menubtn" style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(32px)", color: NeutralColors.gray10 }}>
                                <FeatherIcon.Menu />
                            </div>
                        }
                    </div>
                </div>
                { showMenu &&
                    <div style={{ zIndex: 200, position: 'fixed' }}>
                        <div className="container-fluid" style={{ backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)", backgroundColor: "rgba(0, 0, 0, 0.6)", animation: "fadeIn ease 0.5s", animationIterationCount: 1, animationFillMode: "fowards" }}>
                            <div className="row min-vh-100 vw-100">
                                <div className="col my-auto">
                                    <div className="container">
                                        <div className="row" style={{ color: NeutralColors.gray10 }}>
                                            <div className="col-md">
                                                <h1>Navigation</h1>
                                                <nav className="d-flex flex-column">
                                                    <NavLink exact to="/" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Home" />
                                                            </div>
                                                            <div className="col">
                                                                Home
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/members" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Teamwork" />
                                                            </div>
                                                            <div className="col">
                                                                Members and Division
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/competitions" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Teamwork" />
                                                            </div>
                                                            <div className="col">
                                                                Competitions
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/robots" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Robot" />
                                                            </div>
                                                            <div className="col">
                                                                Robots
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/projects" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="ClipboardList" />
                                                            </div>
                                                            <div className="col">
                                                                Projects
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/social" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Share" />
                                                            </div>
                                                            <div className="col">
                                                                Social Media
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <a href="https://flic.kr/ps/3b8mmU" style={{ color: NeutralColors.gray10 }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Album" />
                                                            </div>
                                                            <div className="col">
                                                                Gallery
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <NavLink to="/contact" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Headset" />
                                                            </div>
                                                            <div className="col">
                                                                Contact Us
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/resources" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                        <div className="row" style={{ fontSize: FontSizes.size24 }}>
                                                            <div className="col-auto">
                                                                <Icon iconName="Folder" />
                                                            </div>
                                                            <div className="col">
                                                                Resources
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </nav>
                                            </div>
                                            <div className="col d-none d-md-block">
                                                <h1>Announce&shy;ments</h1>
                                                <h2>Applications Are Open!</h2>
                                                <Text>Are you a Cardozo student interested in STEM? If so, join Cardozo Robotics! <a href="https://docs.google.com/forms/d/e/1FAIpQLSd02pl3hWa9f4DoGQIkXz5iesPBoFfG4UevRP7N7Zjfvc9P8g/viewform?usp=sf_link">Click here to fill out the Google Form to apply</a>.</Text>
                                                <h2>Changelog</h2>
                                                <h3>Version 4.1.1 Hotfix #1</h3>
                                                <ul>
                                                    <li>Added team font to headings</li>
                                                    <li>Replaced navigation and announcements modal with a full-screen master menu and some flashy animations</li>
                                                    <li>Moved menu button to bottom right</li>
                                                    <li>Fixed typos</li>
                                                    <li>Fixed Google Form link</li>
                                                </ul>
                                                <h3>Version 4.1.1</h3>
                                                <ul>
                                                    <li>Improved announcements dialog</li>
                                                    <li>Added text placeholders</li>
                                                    <li>Added parallax backgrounds (Desktop only)</li>
                                                    <li>Made only current link orange</li>
                                                    <li>Added competition links for robots</li>
                                                    <li>Bug fixes</li>
                                                    <li>Added 404 page</li>
                                                </ul>
                                                <NavLink to="/changelog" style={{ color: NeutralColors.gray10 }} activeStyle={{ color: "rgb(255,106,0)" }}>
                                                    See Full Changelog <Icon iconName="DiffInline" style={{ verticalAlign: 'bottom' }} />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ bottom: "2em", left: "1em", position: "relative", color: NeutralColors.gray10 }} >
                            <Text>v4.1.2</Text>
                        </div>
                    </div>
                }
                <div style={{ backgroundColor: NeutralColors.gray210, color: NeutralColors.gray10 }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/members" component={Members} />
                        <Route path="/competitions" component={Competitions} />
                        <Route path="/robots" component={Robots} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/social" component={Social} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resources" component={Resources} />
                        <Route path="/error" component={ServerError} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                    <footer className="py-5 mx-0 mt-auto">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-4 pb-3">
                                    <div className="d-flex flex-column">
                                        <h4 className="text-muted">About Us</h4>
                                        <NavLink className="text-muted" to="/">Our Team</NavLink>
                                        <NavLink className="text-muted" to="/members">Our Members</NavLink>
                                        <NavLink className="text-muted" to="/robots">Our Robots</NavLink>
                                        <NavLink className="text-muted" to="/competitions">Competitions</NavLink>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 pb-3">
                                    <div className="d-flex flex-column">
                                        <h4 className="text-muted">Community</h4>
                                        <NavLink className="text-muted" to="/social">Social Media</NavLink>
                                        <NavLink className="text-muted" to="/projects">Projects</NavLink>
                                        <NavLink className="text-muted" to="/contact">Contact Us</NavLink>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 pb-3">
                                    <div className="d-flex flex-column">
                                        <h4 className="text-muted">Resources</h4>
                                        <a className="text-muted" href="https://flic.kr/ps/3b8mmU">Gallery</a>
                                        <NavLink className="text-muted" to="/resources">More</NavLink>
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
                                <Text className="text-center pb-3">Copyright &copy; 2020 BNCHS Sentinels</Text>
                                <Text style={{ fontFamily: "Arial" }}><i>FIRST&reg;</i>, <i>FIRST®</i> Robotics Competition, and <i>FIRST&reg;</i> Tech Challenge, are registered trademarks of <i>FIRST&reg;</i> (<NavLink to="www.firstinspires.org" className="text-muted">www.firstinspires.org</NavLink>) which is not overseeing, involved with, or responsible for this activity, product, or service.</Text>
                            </div>
                            <div className="d-md-none" style={{ paddingBottom: "100px" }}>
                            </div>
                        </div>
                    </footer>

                </div>
            </BrowserRouter >
        );
    }
}

export default hot(module)(App);
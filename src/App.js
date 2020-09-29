import * as React from 'react';
import { hot } from "react-hot-loader";
import { Icon } from '@fluentui/react/lib/Icon';
import * as FeatherIcon from 'react-feather';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: NeutralColors.gray220 }}>
                <div className="row vh-100">
                    <div className="col-auto h-100 d-none d-md-block">
                        <div className="row h-100">
                            <div className="col my-auto px-4 mh-100" style={{ overflowY: "auto" }}>
                                <nav className="nav flex-column" style={{ fontSize: FontSizes.size28 }}>
                                    <a href="/" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Home">
                                        <Icon iconName="Home" />
                                    </a>
                                    <a href="/members" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Members">
                                        <Icon iconName="Teamwork" />
                                    </a>
                                    <a href="/competitions" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="FIRST Robotics">
                                        <img class="d-block" src="img/FIRST_Vertical_RGB_reverse.png" width="28pt" />
                                    </a>
                                    <a href="/robots" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Robots">
                                        <Icon iconName="Robot" />
                                    </a>
                                    <a href="/projects" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Projects">
                                        <Icon iconName="ClipboardList" />
                                    </a>
                                    <a href="https://flic.kr/ps/3b8mmU" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Flickr">
                                        <Icon iconName="Picture" />
                                    </a>
                                    <a href="/social" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Social Media">
                                        <Icon iconName="Share" />
                                    </a>
                                    <a href="/contact" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Contact Us">
                                        <Icon iconName="Headset" />
                                    </a>
                                    <a href="/resources" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Resources">
                                        <Icon iconName="Folder" />
                                    </a>
                                    <a href="/search" class="my-2 text-light" data-toggle="tooltip" data-placement="right" title="Search">
                                        <Icon iconName="Search" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col text-light" style={{ overflowY: "auto" }}>
                        <div className="d-flex flex-column min-vh-100">
                            <footer className="py-5 mx-0 mt-auto">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 col-sm-4 pb-3">
                                            <div className="d-flex flex-column">
                                                <h4 className="text-muted">About Us</h4>
                                                <a className="text-muted" href="team">Our Team</a>
                                                <a className="text-muted" href="members">Our Members</a>
                                                <a className="text-muted" href="robots">Our Robots</a>
                                                <a className="text-muted" href="competitions">Competitions</a>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4 pb-3">
                                            <div className="d-flex flex-column">
                                                <h4 className="text-muted">Community</h4>
                                                <a className="text-muted" href="news">Newsletter</a>
                                                <a className="text-muted" href="blog">Blog</a>
                                                <a className="text-muted" href="social">Social Media</a>
                                                <a className="text-muted" href="projects">Projects</a>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4 pb-3">
                                            <div className="d-flex flex-column">
                                                <h4 className="text-muted">Resources</h4>
                                                <a className="text-muted" href="calendar">Calendar</a>
                                                <a className="text-muted" href="gallery">Gallery</a>
                                                <a className="text-muted" href="more">More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center pb-3">
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://github.com/team5599" data-toggle="tooltip" data-placement="bottom" title="GitHub"><FeatherIcon.GitHub strokeWidth="1.5px" /></a>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.instagram.com/sentinels_5599/" data-toggle="tooltip" data-placement="bottom" title="Instagram"><FeatherIcon.Instagram strokeWidth="1.5px" /></a>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.facebook.com/team5599sentinels" data-toggle="tooltip" data-placement="bottom" title="Facebook"><FeatherIcon.Facebook strokeWidth="1.5px" /></a>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://twitter.com/Sentinels5599" data-toggle="tooltip" data-placement="bottom" title="Twitter"><FeatherIcon.Twitter strokeWidth="1.5px" /></a>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="https://www.youtube.com/channel/UCALF3caI0F4WJfJisLFSBWQ" data-toggle="tooltip" data-placement="bottom" title="YouTube"><FeatherIcon.Youtube strokeWidth="1.5px" /></a>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-secondary" href="mailto:marketing.sentinels@gmail.com" data-toggle="tooltip" data-placement="bottom" title="Email"><FeatherIcon.Mail strokeWidth="1.5px" /></a>
                                    </div>
                                    <div className="text-secondary">
                                        <p className="text-center pb-3">Copyright © 2020 BNCHS Sentinels</p>
                                        <p style={{ fontFamily: "Arial" }}><i>FIRST®</i>, <i>FIRST®</i> Robotics Competition, and <i>FIRST®</i> Tech Challenge, are registered trademarks of <i>FIRST®</i> (<a href="www.firstinspires.org" className="text-muted">www.firstinspires.org</a>) which is not overseeing, involved with, or responsible for this activity, product, or service.</p>
                                    </div>
                                    <div className="d-md-none" style={{ paddingBottom: "100px" }}>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
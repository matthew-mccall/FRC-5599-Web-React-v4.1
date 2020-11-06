import * as React from 'react';
import { hot } from "react-hot-loader";
import { Text } from "@fluentui/react/lib/Text"
import { Shimmer } from '@fluentui/react';
import $ from 'jquery';


class Members extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        $(".parallax").each(function () {
            $(this).css("background", $(this).attr("data-bg"))
            $(this).css("background-size", "cover")
            $(this).css("background-position", "center center")
            if ($(window).width() >= 768) {
                $(this).css("background-attachment", "fixed")
            } else {
                $(this).css("background-attachment", "scroll")
            }
        })
    }

    render() {
        return (
            <main>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(30, 108, 147, 0.8), rgba(30, 108, 147, 0.8)), url('img/robot_1.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Members and Divisions</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Members and Divisions</h1>
                                        </div>
                                        <Text className="lead">Our team is divided into separate divisons that specialize in a specific field and work together as a team to produce a fully functional robot.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(243, 134, 36, 0.8), rgba(243, 134, 36, 0.8)), url('img/mechanics.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Mechanics</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Mechanics</h1>
                                        </div>
                                        <Text className="lead">The Mechanics division handles the construction of the robot. Designing and building the core mechanisms using the proper tools. Online we can teach the different tools and techniques required to properly build a robot.</Text>
                                        <Text>
                                            <ol>
                                                <li>Research on new possible drive trains, motors, and etc.</li>
                                                <li>Learning the name of the tools and how to use them.</li>
                                                <li>Working with our mentors to learn how to apply our knowledge and know how to take apart/put our robots together.</li>
                                            </ol>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(234, 30, 100, 0.8), rgba(234, 30, 100, 0.8)), url('img/electronics.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Electronics</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Electronics</h1>
                                        </div>
                                        <Text className="lead">Electronics deals with the power and control system of the robot. This includes working with batteries, circuit breakers, motor controllers, various sensors and wires. In the electronics division, one learns how to wire all these different components to make our robot/s function.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(241, 197, 14, 0.8), rgba(241, 197, 14, 0.8)), url('img/46612998605_3af2defbeb_k.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Programming</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Programming</h1>
                                        </div>
                                        <Text className="lead">The Programming division is responsible for adding functionality to the robot through use of its motors, servos, sensors, etc. We deal with both human-controlled actions through gamepads and autonomous “sensor-based” actions to control most of the robot. All of this is handled over our laptop “Driver Station”, sending commands and reading data to and from the robot. After teaching you Java <em>(No prior experience required)</em> and how to use our various tools and software, come “Kick Off” when the competition is revealed, we will split into two groups.</Text>
                                        <Text>
                                            <ul>
                                                <li>The “Tele-Operated” group will focus on user-controlled actions for the robot and work with controllers. You will work with the driveteam to create the most comfortable and efficient control systems.</li>
                                                <li>The “Autonomous” group will focus on sensor and camera-based data to make the robot complete complex automated tasks without the aid of a person. This is more on the complex side and will require a lot of research.</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(32, 140, 76, 0.8), rgba(32, 140, 76, 0.8)), url('img/40545476633_bc7a03d898_k.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Computer-Aided Design</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Computer-Aided Design</h1>
                                        </div>
                                        <Text className="lead">In this division, we will be doing design practices and lectures on features and what is necessary to teach you guys to design a robot in the computer.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(45, 243, 208, 0.8), rgba(45, 243, 208, 0.8)), url('img/46632722835_14ca5fa131_k.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1">Marketing</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1>Marketing</h1>
                                        </div>
                                        <Text className="lead">Our marketing division is one cohesive group, responsible for sponsor outreach, public appearance, and most importantly internal budget and activity management. Some of the work from this division includes:</Text>
                                        <Text>
                                            <ul>
                                                <li>Outreach through phone calls, emails, and in person interactions.</li>
                                                <li>Managing the team’s overall financial activities and elements including divisional budgets, logs of income, profit of each respective fundraiser.</li>
                                                <li>Executing fundraising and community events such as bake sales, PTC events, and luncheons.</li>
                                                <li>Exposing students to development in skills pertaining organization, writing, presentation, communication, and leadership.</li>
                                                <li>Help organize events like competitions (gather necessary materials like competition rosters, robot transportation, etc)</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default hot(module)(Members);
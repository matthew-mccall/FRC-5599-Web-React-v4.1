import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Text } from "@fluentui/react/lib/Text"
import { Shimmer } from '@fluentui/react';
import $ from 'jquery';


class Competitions extends React.Component {

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
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(237, 28, 36, 0.8), rgba(237, 28, 36, 0.8)), url('img/robot_1.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1 ignore-bladerunner">FIRST Robotics</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1 className="display-4 ignore-bladerunner">FIRST Robotics</h1>
                                            <hr className="border-light" />
                                        </div>
                                        <h2>About FIRST</h2>
                                        <Text>FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people's interest and participation in science and technology. Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.</Text>
                                        <Text>FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21 st century work-life skills.</Text>
                                        <small><i>Content courtesy of the FIRST website.</i></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(0, 101, 179, 0.8), rgba(0, 101, 179, 0.8)), url('img/history.jpg')">
                        <div className="container-fluid">
                            <div className="row min-vh-100 text-light">
                                <div className="col my-auto">
                                    <div className="container py-5">
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1 ignore-bladerunner">Mission and Vision</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1 className="display-4 ignore-bladerunner">Mission and Vision</h1>
                                        </div>
                                        <hr className="border-light" />
                                        <h2>Mission</h2>
                                        <Text>The mission of FIRST® is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</Text>
                                        <h2>Vision</h2>
                                        <Text>"To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders." Dean Kamen, Founder</Text>
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

export default hot(module)(Competitions);
import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
import $ from 'jquery';


class Resources extends React.Component {

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
            <div className="parallax" data-bg="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/robot_1.jpg')">
                <div className="container min-vh-100">
                    <div className="py-5">
                        <main>
                            <div className="d-none d-lg-block">
                                <h1 className="display-1">Resources</h1>
                            </div>
                            <div className="d-lg-none">
                                <h1>Resources</h1>
                            </div>
                            <Text className="lead">Coming Soon!</Text>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Resources);
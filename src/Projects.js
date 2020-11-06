import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
import VCenter from './VCenter';
import $ from 'jquery';


class Projects extends React.Component {

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
            <VCenter>
                <div className="container">
                    <div className="d-none d-lg-block">
                        <h1 className="display-1">Coming Soon!</h1>
                    </div>
                    <div className="d-lg-none">
                        <h1>Coming Soon!</h1>
                    </div>
                </div>
            </VCenter>
        );
    }
}

export default hot(module)(Projects);
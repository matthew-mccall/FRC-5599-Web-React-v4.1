import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
import $ from 'jquery';
import VCenter from './VCenter';

class ServerError extends React.Component {

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
                    <main>
                        <h2 className="display-1">500 - Internal Server Error</h2>
                        <Text className="lead">We're sorry, something went wrong.</Text>
                    </main>
                </div>
            </VCenter>
        );
    }
}

export default hot(module)(ServerError);
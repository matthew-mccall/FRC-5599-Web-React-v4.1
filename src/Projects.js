import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
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
            <div className="row flex-grow-1" style={{ color: NeutralColors.gray30 }}>
                <div className="col my-auto">
                    <div className="container py-5">
                        <main>
                            <h1>Coming Soon!</h1>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Projects);
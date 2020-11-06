import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
import { Shimmer } from '@fluentui/react';
import $ from 'jquery';


class Social extends React.Component {

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
        const calloutProps = { gapSpace: 0 }
        const hostStyles = { root: { display: 'inline-block' } };
        return (
            <div className="container-fluid">
                <div className="row min-vh-100 parallax" data-bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/history.jpg')">
                    <div className="col my-auto">
                        <div className="py-5 container" style={{ color: NeutralColors.gray30 }}>
                            <main>
                                <div className="d-none d-sm-none d-md-block text-center" style={{ color: NeutralColors.gray30 }}>
                                    <h1 className="display-1">Social Media</h1>
                                </div>
                                <div className="d-md-none d-lg-none d-xl-none text-center" style={{ color: NeutralColors.gray30 }}>
                                    <h1>Social Media</h1>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <TooltipHost content="GitHub" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="https://github.com/team5599"><FeatherIcon.GitHub /></a>
                                    </TooltipHost>
                                    <TooltipHost content="Instagram" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="https://www.instagram.com/sentinels_5599/"><FeatherIcon.Instagram /></a>
                                    </TooltipHost>
                                    <TooltipHost content="Facebook" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="https://www.facebook.com/team5599sentinels"><FeatherIcon.Facebook /></a>
                                    </TooltipHost>
                                    <TooltipHost content="Twitter" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="https://twitter.com/Sentinels5599"><FeatherIcon.Twitter /></a>
                                    </TooltipHost>
                                    <TooltipHost content="YouTube" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="https://www.youtube.com/channel/UCALF3caI0F4WJfJisLFSBWQ"><FeatherIcon.Youtube /></a>
                                    </TooltipHost>
                                    <TooltipHost content="Email" calloutProps={calloutProps} styles={hostStyles}>
                                        <a className="p-3 m-2 rounded-circle btn btn-outline-light" href="mailto:marketing.sentinels@gmail.com"><FeatherIcon.Mail /></a>
                                    </TooltipHost>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Social);
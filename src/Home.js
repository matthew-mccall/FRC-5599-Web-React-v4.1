import * as React from 'react';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Shimmer, Stack } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text"
import { Icon } from '@fluentui/react/lib/Icon';
import $ from 'jquery';
import VCenter from './VCenter';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            teamInfo: undefined,
            gotData: false
        }
    }

    componentDidMount() {
        $.get("https://bnchs-robotics-server-v4.herokuapp.com/api/team", (data) => {
            this.setState({
                teamInfo: data,
                gotData: true
            })
        })

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
        const { gotData, teamInfo } = this.state;
        const spacingTokens = {
            childrenGap: '8pt'
        }
        const shimmerStyles = {
            shimmer: NeutralColors.gray90,
            shimmerWave: NeutralColors.gray60
        }

        return (
            <main>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(30, 108, 147, 0.8), rgba(30, 108, 147, 0.8)), url('img/robot_1.jpg')">
                        <div className="d-flex flex-column vh-100 container-fluid">
                            <div className="flex-grow-1 row">
                                <div className="col my-auto">
                                    <div className="container py-5" style={{ color: NeutralColors.gray30 }}>
                                        <div className="d-none d-lg-block">
                                            <h1 className="display-1 sentinels-font">The Sentinels</h1>
                                        </div>
                                        <div className="d-lg-none">
                                            <h1 className="display-4 sentinels-font">The Sentinels</h1>
                                            <hr className="border-light" />
                                        </div>
                                        <h2>Competitive Robotics Team | FRC 5599 BNCHS Sentinels</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Text className="p-5" style={{ textAlign: 'center' }}>Scroll down <br></br> <Icon iconName="ChevronDown" /></Text>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="container">
                            {gotData
                                ? <Text>{teamInfo.desc}</Text>
                                : <Stack verticalAlign="space-between" tokens={spacingTokens}>
                                    <Shimmer shimmerColors={shimmerStyles} />
                                    <Shimmer shimmerColors={shimmerStyles} />
                                    <Shimmer shimmerColors={shimmerStyles} />
                                    <Shimmer shimmerColors={shimmerStyles} />
                                </Stack>
                            }
                        </div>
                    </div>
                </section>
                <section>
                    <div className="parallax" data-bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/history.jpg')">
                        <VCenter>
                            <div className="container py-5">
                                <div className="d-none d-lg-block">
                                    <h1 className="display-1">Our History</h1>
                                </div>
                                <div className="d-lg-none">
                                    <h1 className="display-4">Our History</h1>
                                </div>
                                <hr className="border-light" />
                                {gotData
                                    ? <Text>{teamInfo.history}</Text>
                                    : <Stack tokens={spacingTokens}>
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                        <Shimmer shimmerColors={shimmerStyles} />
                                    </Stack>
                                }
                            </div>
                        </VCenter>
                    </div>
                </section>
            </main>
        );
    }
}

export default hot(module)(Home);
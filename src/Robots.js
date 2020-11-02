import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Text } from "@fluentui/react/lib/Text"
import { Shimmer, Stack, StackItem } from '@fluentui/react';
import $ from 'jquery';


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            robots: null,
            gotData: false
        }
    }

    componentDidMount() {

        $.get("https://bnchs-robotics-server-v4.herokuapp.com/api/robots", (data) => {
            this.setState({
                robots: data,
                gotData: true
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
        })
    }

    render() {
        const { gotData, robots } = this.state;

        const horizontalGapStackTokens = {
            childrenGap: 10,
        };

        return (
            <main>
                {
                    gotData && robots.map(robot => (
                        <section>
                            <div className="parallax" data-bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/robots/${robot.name}.jpg')`}>
                                <div className="container-fluid">
                                    <div className="row min-vh-100 text-light">
                                        <div className="col my-auto">
                                            <div className="container text-center">
                                                <div className="d-none d-lg-block">
                                                    <h1 className="display-1 sentinels-font">{robot.name}</h1>
                                                </div>
                                                <div className="d-lg-none">
                                                    <h1 className="display-4 sentinels-font">{robot.name}</h1>
                                                    <hr className="border-light" />
                                                </div>
                                                <h2>{robot.season}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5" style={{ background: NeutralColors.gray30 }}>
                                <div className="container">
                                    <Text>
                                        {robot.biography}
                                    </Text>
                                    <Stack horizontal tokens={horizontalGapStackTokens} className="mt-3">
                                        {
                                            Object.keys(robot.competitions).map(competition => (
                                                <StackItem>
                                                    <a className="btn btn-primary" href={robot.competitions[competition].link}>{robot.competitions[competition].name}</a>
                                                </StackItem>
                                            ))
                                        }
                                    </Stack>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </main>
        );
    }
}

export default hot(module)(Home);
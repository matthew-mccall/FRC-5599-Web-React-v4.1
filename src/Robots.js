import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { Icon } from '@fluentui/react/lib/Icon';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import $ from 'jquery';
import { Shimmer } from '@fluentui/react';


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            robots: {},
            gotData: false
        }
    }

    componentDidMount() {

        $.get("http://127.0.0.1:3001/robots", (data) => {
            this.setState({
                robots: data.robots,
                gotData: true
            })

            $(".defer-bg").each(function () {
                $(this).css("background", $(this).attr("data-bg"))
                $(this).css("background-size", "cover")
                $(this).css("background-repeat", "no-repeat")
                $(this).css("background-position", "center")
                if ($("window").width >= 768) {
                    $(this).css("background-attachment", "fixed")
                } else {
                    $(this).css("background-attachment", "scroll")
                }
            })
        })
    }

    render() {
        const { gotData, robots } = this.state;
        return (
            <main>
                {
                    gotData && robots.map(robot => (
                        <section>
                            <div className="defer-bg" data-bg={"linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/robots/" + robot.name + ".jpg')"}>
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
                                                <h2>{robot.year}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5" style={{ background: NeutralColors.gray30 }}>
                                <div className="container">
                                    {robot.biography}
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
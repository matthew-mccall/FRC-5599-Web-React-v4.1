import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { Icon } from '@fluentui/react/lib/Icon';
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import $ from 'jquery';
import { Shimmer } from '@fluentui/react';


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: {},
            gotData: false
        }
    }

    componentDidMount() {

        $.get("http://127.0.0.1:3001/contact", (data) => {
            this.setState({
                contacts: data.contacts,
                gotData: true
            })
        })

        $(".defer-bg").each(function () {
            $(this).css("background", $(this).attr("data-bg"))
            $(this).css("background-size", "cover")
            $(this).css("background-position", "center center")
        })
    }

    render() {

        const { gotData, contacts } = this.state;

        return (
            <div className="row flex-grow-1 defer-bg" data-bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/47510658841_1633658cf3_k.jpg')">
                <div className="col my-auto p-5">
                    <div style={{ color: NeutralColors.gray30 }}>
                        <main>
                            <div className="container">
                                <div className="d-none d-sm-none d-md-block text-center" style={{ color: NeutralColors.gray30 }}>
                                    <h1 className="display-1">Contact Us</h1>
                                </div>
                                <div className="d-md-none d-lg-none d-xl-none text-center" style={{ color: NeutralColors.gray30 }}>
                                    <h1>Contact Us</h1>
                                </div>

                                <table className="table table-borderless" style={{ color: NeutralColors.gray30 }}>
                                    <tbody>
                                        {
                                            gotData && contacts.map(contact => (
                                                <tr>
                                                    <td className="text-right">{contact.name}</td>
                                                    <td><a href={"mailto:" + contact.contact}>{contact.contact}</a></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Contact);
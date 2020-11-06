import * as React from 'react';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { Shimmer } from '@fluentui/react';
import { Text } from "@fluentui/react/lib/Text"
import $ from 'jquery';


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: null,
            gotData: false
        }
    }

    componentDidMount() {

        $.get("https://bnchs-robotics-server-v4.herokuapp.com/api/contacts", (data) => {
            this.setState({
                contacts: data,
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

        const { gotData, contacts } = this.state;

        return (
            <div className="container-fluid">
                <div className="row min-vh-100 parallax" data-bg="linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/47510658841_1633658cf3_k.jpg')">
                    <div className="col my-auto p-5">
                        <div>
                            <main>
                                <div className="container">
                                    <div className="d-none d-sm-none d-md-block text-center">
                                        <h1 className="display-1">Contact Us</h1>
                                    </div>
                                    <div className="d-md-none d-lg-none d-xl-none text-center">
                                        <h1>Contact Us</h1>
                                    </div>

                                    <table className="table table-borderless">
                                        <tbody>
                                            {
                                                gotData && contacts.map(contact => (
                                                    <tr>
                                                        <td className="text-right" style={{ color: NeutralColors.gray10 }} >{contact.name}</td>
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
            </div>
        );
    }
}

export default hot(module)(Contact);
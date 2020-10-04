import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import $ from 'jquery';


class Resources extends React.Component {

    componentDidMount() {

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

export default hot(module)(Resources);
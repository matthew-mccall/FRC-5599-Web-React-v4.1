import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { hot } from "react-hot-loader";
import { NeutralColors } from '@fluentui/theme';
import { FontSizes } from '@fluentui/theme';
import $ from 'jquery';


class Search extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="row flex-grow-1" style={{ color: NeutralColors.gray30 }}>
                <div className="col my-auto p-5">
                    <div className="container">
                        <main>
                            <h1>Coming Soon!</h1>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Search);
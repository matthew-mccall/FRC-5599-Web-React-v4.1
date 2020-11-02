import * as React from 'react';
import { hot } from "react-hot-loader";

class VCenter extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="col my-auto">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(VCenter);
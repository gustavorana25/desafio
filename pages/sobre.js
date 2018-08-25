import React, { Component } from "react";
import { connect } from "react-redux";

class Page extends Component {
    static getInitialProps({ store, isServer, pathname, query }) {
        
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>Prop from Redux {this.props.courses.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
            </div>
        )
    }
}

export default connect(state => state)(Page);
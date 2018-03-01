import React from "react";

export default class User extends React.Component {
    render () {
        return (
            <h1 className="App-title">Welcome to React {this.props.user}</h1>
        );
    }
}

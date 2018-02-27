class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        };
    }

    handleClick() {
        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return React.createElement(Button, { handler: this.handleClick, text: `Click me! (Already clicked ` + this.state.counter + ` times` });
    }
}

class Button extends React.Component {
    render() {
        return React.createElement(
            'button',
            { onClick: this.props.handler },
            this.props.text
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

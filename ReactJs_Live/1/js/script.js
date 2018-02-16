//как я понял пожно не биндить всё равно работает

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
        return React.createElement(
            'div',
            null,
            React.createElement(Button, { handler: this.handleClick }),
            React.createElement(Text, { counter: this.state.counter })
        );
    }
}

class Button extends React.Component {
    render() {
        return React.createElement(
            'button',
            { onClick: this.props.handler },
            'Click me!!!'
        );
    }
}

class Text extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            '(Already clecked ',
            this.props.counter,
            ' times!)'
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

//как я понял пожно не биндить всё равно работает

class Content extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState ({
            counter: ++this.state.counter
        });
    }

    render () {
        return (
            <div>
                <Button handler={this.handleClick} />
                <Text   counter={this.state.counter} />    
            </div>    
        );
    }
}

class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.handler}>
                Click me!!!
            </button>
        );
    }
}

class Text extends React.Component {
    render () {
        return (
            <div>
                (Already clecked {this.props.counter} times!)
            </div>
        );
    }
}

ReactDOM.render(
    <Content />, 
    document.getElementById('content')
);

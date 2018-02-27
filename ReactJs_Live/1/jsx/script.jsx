class Content extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState({
            counter: ++this.state.counter
        });
    }

    render () {
        return (
            <Button handler={this.handleClick} text={`Click me! (Already clicked ` + this.state.counter + ` times`} />
        );
    }
}

class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.handler}>{this.props.text}</button>
        );
    }
}

ReactDOM.render(
    <Content />, 
    document.getElementById('content')
);

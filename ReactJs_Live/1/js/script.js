const DigitalClock = function (props) {
    return React.createElement(
        'div',
        null,
        props.time
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curentTime: new Date().toLocaleString()
        };
        this.clockLauncher();
    }

    clockLauncher() {
        setInterval(() => {
            this.setState({
                curentTime: new Date().toLocaleString()
            });
        }, 1000);
    }

    render() {
        return (
            // <div>{this.state.curentTime}</div>
            React.createElement(DigitalClock, { time: this.state.curentTime })
        );
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));

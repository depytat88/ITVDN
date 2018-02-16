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
        let diapazon = setInterval(() => {
            console.log("time changing");
            this.setState({
                curentTime: new Date().toLocaleString()
            });
        }, 1000);
        this.setState({ diapazon: diapazon });
    }

    componentWillUnmount() {
        clearInterval(this.state.diapazon);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(DigitalClock, { time: this.state.curentTime }),
            React.createElement(
                'p',
                null,
                'Clock will be removed in ',
                this.props.seconds
            )
        );
    }
}

let seconds = 5;
let interval = setInterval(() => {
    if (seconds === 0) {
        ReactDOM.render(React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Clock has been removed'
            )
        ), document.getElementById('content'));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(Clock, { seconds: seconds }), document.getElementById('content'));
        seconds--;
    }
}, 1000);

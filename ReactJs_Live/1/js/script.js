class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: null,
            timer: null
        };
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft
            });
        }, 1000);

        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Timer"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(Button, { time: "5", startTimer: this.startTimer }),
                React.createElement(Button, { time: "10", startTimer: this.startTimer }),
                React.createElement(Button, { time: "15", startTimer: this.startTimer }),
                React.createElement(TimerDisplay, { timeLeft: this.state.timeLeft }),
                React.createElement("audio", { id: "end", preload: "auto", src: "media/beatlesmail.wav" })
            )
        );
    }
}

class Button extends React.Component {
    handleStartTimer() {
        return this.props.startTimer(this.props.time);
    }

    render() {
        return React.createElement(
            "button",
            { onClick: this.handleStartTimer.bind(this) },
            this.props.time,
            " \u0441\u0435\u043A\u0443\u043D\u0434"
        );
    }
}

class TimerDisplay extends React.Component {
    render() {
        if (this.props.timeLeft === 0) {
            document.getElementById("end").play();
        }
        if (this.props.timeLeft === 0 || this.props.timeLeft === null) {
            return React.createElement("div", null);
        }
        return React.createElement(
            "h1",
            null,
            "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 ",
            this.props.timeLeft
        );
    }
}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('content'));

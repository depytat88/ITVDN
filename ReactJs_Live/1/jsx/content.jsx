const React = require('react')
const ReactDOM = require('react-dom')



class Content extends React.Component {
    constructor (props) {
        super (props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: null,
            timer: null
        }
    }

    startTimer (timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(()=>{
            timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft
            });
        }, 1000)

        return (
            this.setState({
                timeLeft: timeLeft,
                timer: timer
            })
        );
    }

    render () {
        return (
            <div>
                <h2>Timer</h2>
                <div>
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                    <TimerDisplay timeLeft={this.state.timeLeft}/>
                    <audio id="end" preload="auto" src="media/beatlesmail.wav"></audio>
                </div>
            </div>
        );
    }
}

class Button extends React.Component {
    handleStartTimer () {
        return (
            this.props.startTimer(this.props.time)
        );
    }

    render () {
        return (
            <button onClick={this.handleStartTimer.bind(this)}>{this.props.time} секунд</button>
        );
    }
}

class TimerDisplay extends React.Component {
    render () {
        if (this.props.timeLeft === 0) {
            document.getElementById("end").play()
        }
        if (this.props.timeLeft === 0 || this.props.timeLeft === null) {
            return (
                <div></div>
            );
        }
        return (
            <h1>Осталось времени {this.props.timeLeft}</h1>
        );
    }
}

module.exports = Content

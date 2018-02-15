const DigitalClock = function (props) {
    return <div>{props.time}</div>
}

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            curentTime: (new Date()).toLocaleString()
        }
        this.clockLauncher()
    }

    clockLauncher () {
        setInterval(() => {
            this.setState({
                curentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render () {
        return (
            // <div>{this.state.curentTime}</div>
            <DigitalClock time={this.state.curentTime} />
        );
    }
}

ReactDOM.render(
    <Clock />, 
    document.getElementById('content')
);
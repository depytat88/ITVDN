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
        let diapazon = setInterval(() => {
            console.log("time changing");
            this.setState({
                curentTime: (new Date()).toLocaleString()
            })
        }, 1000);
        this.setState({diapazon: diapazon});
    }

    componentWillUnmount() {
        clearInterval(this.state.diapazon);
    }

    render () {
        return (
            <div>
                <DigitalClock time={this.state.curentTime} />
                <p>Clock will be removed in {this.props.seconds}</p>
            </div>
        );
    }
}



let seconds = 5;
let interval = setInterval (()=>{
    if (seconds === 0) {
        ReactDOM.render(
            <div>
                <p>
                    Clock has been removed
                </p>
            </div>, 
            document.getElementById('content')
        );
        clearInterval(interval);
    } else {
        ReactDOM.render(
            <Clock seconds={seconds} />, 
            document.getElementById('content')
        );
        seconds --;
    }
},1000);

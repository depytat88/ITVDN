class Content extends React.Component {
    constructor (props) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.state = {
            text: "type here"
        };
        this.helper();
    }

    helper() {
        setInterval(()=>{
            console.log(this.state.text);
        }, 1000);
    }

    handleText(event) {
        this.setState({
            text: event.target.value
        });
    }

    render () {
        return (
            <form>
                <textarea value={this.state.tetx} onChange={this.handleText}></textarea>
            </form>
        );
    }
}

ReactDOM.render(
    <Content  />, 
    document.getElementById('content')
);

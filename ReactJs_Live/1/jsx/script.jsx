class Content extends React.Component {
    constructor (props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            selectValue: "angular"
        };
        this.helper();
    }

    helper() {
        setInterval(()=>{
            console.log(this.state.selectValue);
        }, 1000);
    }

    handleSelect(event) {
        this.setState({
            selectValue: event.target.value
        });
    }

    render () {
        return (
            <form>
                <select 
                    value={this.state.selectValue}
                    onChange={this.handleSelect}>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="ember">Ember</option>
                </select>
            </form>
        );
    }
}

ReactDOM.render(
    <Content  />, 
    document.getElementById('content')
);

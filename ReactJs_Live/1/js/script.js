class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            selectValue: "angular"
        };
        this.helper();
    }

    helper() {
        setInterval(() => {
            console.log(this.state.selectValue);
        }, 1000);
    }

    handleSelect(event) {
        this.setState({
            selectValue: event.target.value
        });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement(
                "select",
                {
                    value: this.state.selectValue,
                    onChange: this.handleSelect },
                React.createElement(
                    "option",
                    { value: "angular" },
                    "Angular"
                ),
                React.createElement(
                    "option",
                    { value: "react" },
                    "React"
                ),
                React.createElement(
                    "option",
                    { value: "ember" },
                    "Ember"
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

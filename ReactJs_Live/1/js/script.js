class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup: {
                Angular: false,
                ReactJs: true,
                Ember: false
            }

        };
    }

    handleRadio() {
        this.setState({
            counter: ++this.state.counter
        });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", {
                type: "radio",
                value: "angular",
                chacked: this.state.radioGroup.Angular,
                onChange: this.handleRadio
            }),
            React.createElement("input", {
                type: "radio",
                value: "react",
                chacked: this.state.radioGroup.ReactJs,
                onChange: this.handleRadio
            }),
            React.createElement("input", {
                type: "radio",
                value: "ember",
                chacked: this.state.radioGroup.Ember,
                onChange: this.handleRadio
            })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

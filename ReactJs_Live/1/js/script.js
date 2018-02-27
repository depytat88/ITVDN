class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.state = {
            checkboxGroup: {
                Angular: false,
                ReactJs: true,
                Ember: false
            }
        };
    }

    handleCheckbox(event) {
        let object = Object.assign(this.state.checkboxGroup);
        object[event.target.value] = event.target.checked;
        this.setState({
            checkboxGroup: object
        });
        console.log(this.state.checkboxGroup);
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", {
                type: "checkbox",
                value: "Angular",
                checked: this.state.checkboxGroup.Angular,
                onChange: this.handleCheckbox
            }),
            React.createElement("input", {
                type: "checkbox",
                value: "ReactJs",
                checked: this.state.checkboxGroup.ReactJs,
                onChange: this.handleCheckbox
            }),
            React.createElement("input", {
                type: "checkbox",
                value: "Ember",
                checked: this.state.checkboxGroup.Ember,
                onChange: this.handleCheckbox
            })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

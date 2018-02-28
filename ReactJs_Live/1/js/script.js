class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            opacity: false
        };
    }

    toggle() {
        const toolTipNode = ReactDOM.findDOMNode(this);

        this.setState({
            opacity: !this.state.opacity,
            top: toolTipNode.offsetTop,
            left: toolTipNode.offsetLeft
        });
    }

    render() {
        const style = {
            zIndex: this.state.opacity ? 1000 : -1000,
            opacity: +this.state.opacity, //превращаем в цифру через +
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        };

        return React.createElement(
            "div",
            { style: { display: "inline" } },
            React.createElement(
                "span",
                { style: { color: "blue" },
                    onMouseEnter: this.toggle,
                    onMouseOut: this.toggle },
                this.props.children // позволяет выводить любой текст в компоненте и не создавать новый компонент каждый раз

            ),
            React.createElement(
                "div",
                { className: "tooltip bottom", style: style },
                React.createElement("div", { className: "tooltip-arrow" }),
                React.createElement(
                    "div",
                    { className: "tooltip-inner" },
                    this.props.text
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    "\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043D\u0430\u0432\u043E\u0434\u0438\u0442\u0435 \u043C\u044B\u0448\u043A\u043E\u0439 \u043D\u0430 ",
    React.createElement(
        Tooltip,
        { text: "\u0422\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B :)" },
        "\u042D\u0422\u041E\u0422 \u0422\u0415\u041A\u0421\u0422!"
    )
), document.getElementById('content'));

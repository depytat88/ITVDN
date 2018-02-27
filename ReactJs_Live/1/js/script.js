class Menu extends React.Component {
    render() {
        let menus = ["Home", "Service", "Delivery", "Contacts", "Our Partners"];

        return React.createElement(
            "div",
            null,
            menus.map((value, index) => {
                return React.createElement(
                    "div",
                    { key: index },
                    React.createElement(Link, { label: value })
                );
            })
        );
    }
}

class Link extends React.Component {
    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: url },
                this.props.label
            )
        );
    }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('content'));

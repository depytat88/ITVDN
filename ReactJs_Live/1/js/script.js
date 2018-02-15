// let heading = <h1>Hello World zzz!!!</h1>;
let background = { backgroundColor: "green", border: "1px solid red" };

class HelloWorld extends React.Component {
    getUrl() {
        return "https://ddddddd.com";
    }

    render() {
        // return <h1 style={{background: "red"}}>Hello World dzdzdz {this.getUrl()}!!!</h1>;
        return React.createElement(
            "h1",
            { style: background },
            "Hello World dzdzdz ",
            this.getUrl(),
            "!!!"
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));

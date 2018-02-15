// let heading = <h1>Hello World zzz!!!</h1>;
let background = {backgroundColor: "green",border: "1px solid red"};


class HelloWorld extends React.Component {
    getUrl () {
        return "https://ddddddd.com"
    }

    render () {
        // return <h1 style={{background: "red"}}>Hello World dzdzdz {this.getUrl()}!!!</h1>;
        return <h1 style={background}>Hello World dzdzdz {this.getUrl()}!!!</h1>;
    }
}

ReactDOM.render(
    <HelloWorld />, 
    document.getElementById('content')
);
class Button extends React.Component {
    render () {
        return (
            <button>{this.props.buttonLabel}</button>
        );
    }
}

Button.defaultProps = {
    buttonLabel: "Submit"
}

ReactDOM.render(
    <div>
        <Button  buttonLabel="ZZZ" />
        <Button  />
        <Button  />
    </div>, 
    document.getElementById('content')
);

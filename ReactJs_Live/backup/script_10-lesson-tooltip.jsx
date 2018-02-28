class Tooltip extends React.Component {
    constructor (props) {
        super (props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            opacity: false
        }
    }

    toggle () {
        const toolTipNode = ReactDOM.findDOMNode(this) 

        this.setState({
            opacity: !this.state.opacity,
            top: toolTipNode.offsetTop,
            left: toolTipNode.offsetLeft
        });
    }

    render () {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity, //превращаем в цифру через +
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) -30
        }

        return (
            <div style={{display: "inline"}}>
                <span style={{color: "blue"}}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {
                        this.props.children // позволяет выводить любой текст в компоненте и не создавать новый компонент каждый раз
                    }   
                </span>
                <div className="tooltip bottom" style={style}>
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        Никогда не наводите мышкой на <Tooltip text="Ты проиграл :)">ЭТОТ ТЕКСТ!</Tooltip>
    </div>, 
    document.getElementById('content')
);

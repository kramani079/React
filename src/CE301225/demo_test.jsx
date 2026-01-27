import React,{Component} from "react";

class DemoTest extends Component{
    constructor(){
        super();
        this.state={
            textcolorr: "black",
            bgcolorr: "white",
        };

    }
    setTextColor=(color)=>{
        this.setState({textColor:color});
    }
    setBgColor=(color)=>{
        this.setState({bgColor:color});
    }
    render (){
        return(
            <>
            <button onClick={this.setTextColor.bind(this, "green")}>Green</button>
            <button onClick={this.setTextColor.bind(this, "yellow")}>Yellow</button>
            <button onClick={this.setTextColor.bind(this, "blue")}>Blue</button>
            <button onClick={this.setTextColor.bind(this, "red")}>Red</button>
            <br/>
            <button onClick={this.setBgColor.bind(this, "green")}>Green</button>
            <button onClick={this.setBgColor.bind(this, "yellow")}>Yellow</button>
            <button onClick={this.setBgColor.bind(this, "blue")}>Blue</button>
            <button onClick={this.setBgColor.bind(this, "red")}>Red</button>
            <br />

            <p id="textsmp" style={{color:this.state.textColor, backgroundColor:this.state.bgColor}}>Sample Test</p>

            </>
        );
    }

}

export default DemoTest;
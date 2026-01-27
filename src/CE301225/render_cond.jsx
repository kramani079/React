import React,{Component} from "react";

class RenderCondExample extends Component{
    constructor(){
        super();
        this.state={
            isOn: false,
        };

    }
        toggle = () => {
            this.setState({ isOn: !this.state.isOn });
    }
    render (){
        return(
            <>
            <button onClick={this.toggle}>
                {this.state.isOn ? 'ON' : 'OFF'}
            </button>
            <p>Status : {this.state.isOn?"Active":"Inactive"}</p>
            </>
        )
    }

}

export default RenderCondExample;
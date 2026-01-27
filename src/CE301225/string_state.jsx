import React,{Component} from "react";

class StringStateExample extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            age:"",
        };
    }

    handaleNameChange=(e)=>{
        this.setState({name:e.target.value});
    };
    handaleEmailChange=(e)=>{
        this.setState({email:e.target.value});
    };
    handaleAgeChange=(e)=>{
        this.setState({age:e.target.value});
    };

    render(){
        //const {name,email,age}=this.state;
        return(
            <>
            <h1>String State Example</h1>
            <input type="text" placeholder="Enter your name" onChange={this.handaleNameChange}/>
            <h2>Your name is:{this.state.name}</h2>

            <input type="text" placeholder="Enter your email" onChange={this.handaleEmailChange}/>
            <h2>Your email is:{this.state.email}</h2>

            <input type="text" placeholder="Enter your age" onChange={this.handaleAgeChange}/>
            <h2>Your age is:{this.state.age}</h2>
            </>
        )
    }

}

export default StringStateExample;
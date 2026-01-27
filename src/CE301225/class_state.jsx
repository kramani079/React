import React, {Component} from "react";

class StateExample extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            counter: 10,
        };
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1});
    }

    decrementCounter = () => {
        this.setState((prevState) => ({counter: prevState.counter - 1}));
    }


    render(){
        return(
            <>
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
            </>
        );
    }
}
export default StateExample;
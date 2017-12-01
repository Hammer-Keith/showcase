import React, {Component } from 'react';
class TopicBrowser extends Component {
    constructor(){
super();
this.state = {
    input1: 0,
    input2: 0,
    output: 0
}
    }
    
    addthestuff(num1, num2){
    this.setState({input1:num1,
        input2:num2,
        output:(parseInt(num1, 10) + parseInt(num2, 10))
    })
        

    }
    render(){
        return (
            <div className="puzzleBox Sum">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.addthestuff(e.target.value, this.state.input2)}></input>
                <input className="inputLine" onChange={(e) => this.addthestuff(this.state.input1, e.target.value)}></input>
                <span>result: {JSON.stringify(this.state.output)}</span>
            </div>
        )
    }
}
export default TopicBrowser;
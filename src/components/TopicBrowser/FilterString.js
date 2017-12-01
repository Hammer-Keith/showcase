import React, {Component } from 'react';
class TopicBrowser extends Component {
    constructor(){
super();
this.state = {
      originalArr: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredArr:[]
}
}
updateUserInput(val){
    this.setState({userInput : val});
}

setFilteredArr(str){

    var finarr = []
    for (var i = 0;i<this.state.originalArr.length;i++){
        alert(this.state.originalArr[i].includes(str))
        if(this.state.originalArr[i].includes(str)){
            finarr.push(this.state.originalArr[i])
        }
    }

    this.setState({filteredArr: finarr})
}


    render(){
        return (
            <div className="puzzleBox filterSting">
                 <h4>Filter Object</h4>
                <div>{JSON.stringify(this.state.originalArr)}</div>
                <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick ={() =>{this.setFilteredArr(this.state.userInput)}}> Filter </button>
                <span className="resultsBox">filtered: {JSON.stringify(this.state.filteredArr)}</span>
            </div>
        )
    }
}
export default TopicBrowser;
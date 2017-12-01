import React, {Component } from 'react';
class TopicBrowser extends Component {
    constructor(){
super();
this.state = {
    evenArr: [],
    oddArr: [],
    userInput: ''
}
}

handleChange(val){
    this.setState({userInput: val});
}

assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            evens.push( parseInt(arr[i], 10) );
        }
        else{
            odds.push( parseInt(arr[i], 10));

        }
    }
    this.setState({evenArr: evens, oddArr: odds});
}

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick ={() =>{ this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArr) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArr) } </span>

            </div>
        )
    }
}
export default TopicBrowser;
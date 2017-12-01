import React, {Component } from 'react';
class TopicBrowser extends Component {
    constructor(){
super();
this.state = {
    userInput:"",
    ans:true
}
    }

determinePal(val){
for(var i = 0;i<(val.length*0.5);i++){
  
    if(val[i] != val[(val.length - 1 - i)]){
        this.setState({ans:false})
        return false;
    }
}
this.setState({ans:true})

}

    render(){

        return (
            <div className="puzzleBox Palindrome">
                <h3>Palindrome</h3>
                <input className="inputLine" onChange={
                    (e) => {this.determinePal(e.target.value);}
                    }></input>

                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.ans)}</span>

            </div>
        )
    }
}
export default TopicBrowser;
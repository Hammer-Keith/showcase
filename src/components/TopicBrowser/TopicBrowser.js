import React, {Component } from 'react';
import EvenAndOdd from './EvenAndOdd.js';
import FilterObject from './FilterObject.js';
import FilterString from './FilterString.js';
import Palindrome from './Palindrome.js';
import Sum from './Sum.js';
class TopicBrowser extends Component {
    constructor(){
super();
    }
    render(){
        return (
            <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            </div>
        )
    }
}
export default TopicBrowser;
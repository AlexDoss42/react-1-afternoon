import React, { Component } from 'react';
import Sum from '../Topics/Sum'
import Palindrome from '../Topics/Palindrome'
import FilterString from '../Topics/FilterString'
import FilterObject from '../Topics/FilterObject'
import EvenAndOdd from '../Topics/EvenAndOdd'

class TopicBrowser extends Component {
  render() {
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
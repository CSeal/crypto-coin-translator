import React, { Component } from 'react';
import { CryptoCoinChoicer, CoinChoicer } from '../index';
export class MainContent extends Component {
  render(){
    return (
      <>
        <CryptoCoinChoicer />
        <CoinChoicer />
      </>
    )
  }
}
export default MainContent;
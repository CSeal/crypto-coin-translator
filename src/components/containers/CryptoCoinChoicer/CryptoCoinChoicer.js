import React, {Component} from 'react';
import connector from './connector';
import PropTypes from 'prop-types';
import { CryptoCoinViewRB } from '../../controls'

class CryptoCoinChoicerContainer extends Component {
  render(){
    const {
      cryptoCoins,
      selectedCryptoCoin,
      activeCryptoCoinChangeHandler,
    } = this.props;
    const renderCryptoItems = [];
    for (let cryptoCoinName in cryptoCoins) {
      renderCryptoItems.push({
        cryptoCoinName,
        coins: cryptoCoins[cryptoCoinName],
      })
    }
    return (
      <>
        <div className="cryptoCoinsList">
          {
            renderCryptoItems.map(({cryptoCoinName, coins})=>(
              <CryptoCoinViewRB
                key={cryptoCoinName}
                cryptoCoin={cryptoCoinName}
                currensies={coins}
                changeHandler={this.changeHandler}
                checkedCoin={selectedCryptoCoin}
              />)
            )
          }
        </div>
        <h2>Selected coin: {selectedCryptoCoin}</h2>
      </>
    )
  }
  changeHandler = ({target}) => {
    const {  activeCryptoCoinChangeHandler } = this.props;
    activeCryptoCoinChangeHandler(target.value)
  }
}

export const CryptoCoinChoicer = connector(CryptoCoinChoicerContainer);
CryptoCoinChoicer.displayName = 'CryptoCoinChoicer';
CryptoCoinChoicer.propTypes = {

}
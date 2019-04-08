import React from 'react';
import PropTypes from 'prop-types';
import { cryptoCoinImagesFolderPath } from '../../constans'

export const CryptoCoinViewRB = (props) => {
  const {
    cryptoCoin,
    currensies,
    changeHandler,
    checkedCoin,
  } = props;
  const coinNames = Object.keys(currensies);
  return (
    <label htmlFor={cryptoCoin}>
      <div >
        <div className="cryptoView">
          <img src={`${cryptoCoinImagesFolderPath}${cryptoCoin}.png`} />
          <div style={{color:'#86c451'}}>{cryptoCoin}</div>
        </div>
        <div className="cryptoCourse">
            {
              coinNames.map(coinName => (
                <div key={coinName}>
                  <span className="cryptoCoinName">{coinName}: </span><span>{currensies[coinName]}</span>
                </div>
              ))
            }
        </div>
      </div>
      <input
        id={cryptoCoin}
        type='radio'
        style={{display: 'none'}}
        name='cryptoCoin'
        value={cryptoCoin}
        checked={cryptoCoin === checkedCoin}
        onChange={changeHandler}
      />
    </label>
  )
}

CryptoCoinViewRB.displayName = 'CryptoCoinViewRB';
/* CryptoCoinViewRB.propTypes = {
  cryptoCoin: PropTypes.string.isRequired(),
  currensies: PropTypes.Object.isRequired(),
  changeHandler: PropTypes.func.isRequired(),
  checkedCoin: PropTypes.string.isRequired(),
} */
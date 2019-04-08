import React from 'react';
import cn from 'classnames';
export const CoinViewRB = (props) => {
  const {
    coinName,
    changeHandler,
    checkedCoin,
  } = props;
  return (
    <label htmlFor={coinName} className={cn('coinView', {'activeCoinView': coinName === checkedCoin})}>
      {coinName}
      <input
        id={coinName}
        type='radio'
        style={{display: 'none'}}
        name='coin'
        value={coinName}
        checked={coinName === checkedCoin}
        onChange={changeHandler}
      />
    </label>
  )
}
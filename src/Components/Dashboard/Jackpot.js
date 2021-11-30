import React from 'react'
import bnb from './binance-logo.webp'
import { Icon, Statistic } from 'semantic-ui-react'

const jackpot = (props) => {
  return (
    <Statistic>
      <Statistic.Value>
        <img
          src={bnb}
          alt="jackpot"
          style={{
            width: '18%',
            height: '100%',
            marginLeft: '20px',
            position: 'relative',
            right: '11px',
          }}
        />
        {props.jackpot || '0'}
      </Statistic.Value>
      <Statistic.Label>Mega Binance Smart Chain Lottery</Statistic.Label>
    </Statistic>
  )
}

export default jackpot

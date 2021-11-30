import React from 'react'
import binance from '../../assets/logo.png'
import { Statistic } from 'semantic-ui-react'
import styled from 'styled-components'

const jackpot = (props) => {
  return (
    <Statistic>
      <Statistic.Value></Statistic.Value>
      <Statistic.Label>Mega</Statistic.Label>
      <Image src={{ binance }} alt="jackpot" />
    </Statistic>
  )
}

const Image = styled.img`
  width: 100px;
`
export default jackpot

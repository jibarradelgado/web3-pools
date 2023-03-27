import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Item } from 'semantic-ui-react'

import Pool from 'components/Pool/Pool'
import RequestAccess from 'components/RequestAccess/RequestAccess'

import usePoolAddressesProvider from '@/hooks/usePoolAddressesProvider'
import usePool from '@/hooks/usePool'
import { useAaveProcessedData } from '@/hooks/useAaveProcessedData'

export const PoolList = () => {
  const { active, library, account, chainId } = useWeb3React()
  const [validAddress, setValidAddress] = useState(true)
  const { loading, aaveProcessedData, update } = useAaveProcessedData()
  const poolAddressesProvider = usePoolAddressesProvider()
  const pool = usePool()
  const web3 = library as Web3

  const renderList = () => {
    if (!active) return <RequestAccess />

    return (
      <>
        <Item.Group divided>
          
          <Pool />
          <Pool />
        </Item.Group>
      </>
    )
  }

  return renderList()
}

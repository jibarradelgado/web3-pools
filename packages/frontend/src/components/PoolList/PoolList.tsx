import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Item, Loader } from 'semantic-ui-react'

import Pool from 'components/Pool/Pool'
import RequestAccess from 'components/RequestAccess/RequestAccess'

import usePoolAddressesProvider from '@/hooks/usePoolAddressesProvider'
import usePool from '@/hooks/usePool'
import { useAaveProcessedData } from '@/hooks/useAaveProcessedData'

const PoolList = () => {
  const { active, library, account, chainId } = useWeb3React()
  const [validAddress, setValidAddress] = useState(true)
  const { loading, aaveProcessedData } = useAaveProcessedData()

  const [ processData, setProcessedData ] = useState(aaveProcessedData)
  const pool = usePool()
  const web3 = library as Web3

  if (!active) return <RequestAccess />

  // loading ? console.log(`loading: ${aaveProcessedData}`) : console.log(`not loading: ${aaveProcessedData}`)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
      <Item.Group divided>
        {
          aaveProcessedData.map((reserveUserData, index) =>
            <Pool key={index} reserveData={reserveUserData} />
            )
        }
      </Item.Group>
      )

      }
    </>
  )
}

export default PoolList
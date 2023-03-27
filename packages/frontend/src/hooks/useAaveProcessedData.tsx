import { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

import useAaveProtocolDataProvider from '@/hooks/useAaveProtocolDataProvider'
import { ReserveUserData } from '@/types/AaveAppTypes'
import { string } from 'prop-types'

const getTokenData = async(token: string[], aaveProtocolDataProvider: any, account:string) => {
  const [
    reserveDataResult,
    userReserveData] = await Promise.all([
      aaveProtocolDataProvider.methods.getReserveData(token[1]).call(),
      aaveProtocolDataProvider.methods.getUserReserveData(token[1], account).call(),
    ])

    const liqRate = parseInt(reserveDataResult['liquidityRate']) / 10 ** 25
    const aToken = parseInt(userReserveData['currentATokenBalance']) / 10 ** 18

    return {
      address: token[1],
      symbol: token[0],
      liquidityRate: liqRate,
      aToken: aToken
    }
}

const useAaveProcessedData = () => {
  const [aaveProcessedData, setAaveProcessedData] = useState([] as ReserveUserData[])
  const [loading, setLoading] = useState(true)
  const { active, library, account, chainId } = useWeb3React()
  const aaveProtocolDataProvider = useAaveProtocolDataProvider()
  const web3 = library as Web3



  const update = useCallback(async () => {
    if (aaveProtocolDataProvider) {
      setLoading(true)
      console.log('loading')

      const reservesTokens = await aaveProtocolDataProvider?.methods
          .getAllReservesTokens()
          .call() as []
      // console.log(reservesTokens)

      const tokens = await Promise.all(reservesTokens)
      const tokensPromise = tokens.map((token) => getTokenData(token, aaveProtocolDataProvider, account!))
      const reserveData = await Promise.all(tokensPromise)

      console.log(reserveData)
      setAaveProcessedData(reserveData)
      console.log('ended loading')
      setLoading(false)
    }
  }, [aaveProtocolDataProvider, account])

  useEffect(() => {
    update()
  }, [update])

  return {
    loading,
    aaveProcessedData,
    update
  }
}

export { useAaveProcessedData }
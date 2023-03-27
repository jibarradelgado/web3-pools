import { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

import useAaveProtocolDataProvider from '@/hooks/useAaveProtocolDataProvider'
import { ReserveUserData } from '@/types/AaveAppTypes'

const getTokenData = async(token: string[], aaveProtocolDataProvider: any, account:string) => {
  const [
    reserveDataResult,
    userReserveData] = await Promise.all([
      aaveProtocolDataProvider.methods.getReserveData(token[1]).call(),
      aaveProtocolDataProvider.methods.getUserReserveData(token[1], account).call(),
    ])

    const liqRate = parseInt(reserveDataResult['liquidityRate']) / 10 ** 25
    //console.log(reserveDataResult)
    const aToken = parseInt(userReserveData['currentATokenBalance']) / 10 ** 18
    // console.log(userReserveData)

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
  const { library, account } = useWeb3React()
  const aaveProtocolDataProvider = useAaveProtocolDataProvider()
  const web3 = library as Web3

  const update = useCallback(async () => {
    if (aaveProtocolDataProvider) {
      setLoading(true)

      const reservesTokens = await aaveProtocolDataProvider?.methods
          .getAllReservesTokens()
          .call() as []

      const tokens = await Promise.all(reservesTokens)
      const tokensPromise = tokens.map((token) => getTokenData(token, aaveProtocolDataProvider, account!))
      const reserveData = await Promise.all(tokensPromise)

      setAaveProcessedData(reserveData)
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
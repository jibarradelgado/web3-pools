import { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

import useAaveProtocolDataProvider from '@/hooks/useAaveProtocolDataProvider'
import { ReserveUserData } from '@/types/AaveAppTypes'

const useAaveProcessedData = () => {
  const [aaveProcessedData, setAaveProcessedData] = useState([] as ReserveUserData[])
  const [loading, setLoading] = useState(true)
  const { active, library, account, chainId } = useWeb3React()
  const aaveProtocolDataProvider = useAaveProtocolDataProvider()
  const web3 = library as Web3

  const update = useCallback(async () => {
    if (aaveProtocolDataProvider) {
      setLoading(true)

      if (!web3.utils.isAddress(account!)) {
        return
      }

      const reservesTokens = await aaveProtocolDataProvider?.methods
          .getAllReservesTokens()
          .call() as []
      console.log(reservesTokens)

      let reserveData:ReserveUserData[] = []
      reservesTokens.forEach(async (elem) => {
        const reserveDataResult = await aaveProtocolDataProvider?.methods
        .getReserveData(elem[1])
        .call()

        console.log(reserveDataResult)
        let liqRate = parseInt(reserveDataResult['liquidityRate']) / 10 ** 25
        console.log(liqRate)
        // let borRate = parseInt(reserveDataResult['variableBorrowRate']) / 10 ** 25
        // console.log(borRate)
        // let staRate = parseInt(reserveDataResult['stableBorrowRate']) / 10 ** 25
        // console.log(staRate)

        const userReserveData = await aaveProtocolDataProvider?.methods
        .getUserReserveData(
          elem[1],
          account,
        )
        .call()
      console.log(userReserveData)

      let aToken = parseInt(userReserveData['currentATokenBalance']) / 10 ** 18
      console.log(aToken)

      reserveData.push({
        address: elem[1],
        symbol: elem[0],
        liquidityRate: liqRate,
        aToken: aToken
      })
      })
      setAaveProcessedData(reserveData)
      setLoading(false)
    }
  }, [aaveProtocolDataProvider, account, web3?.utils])

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
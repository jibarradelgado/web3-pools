import { useMemo } from "react"
import { useWeb3React } from "@web3-react/core"
import Web3 from "web3"
import PoolArtifact from "@/config/web3/artifacts/Pool"
import { AbiItem } from 'web3-utils'

const { addresses, abi } = PoolArtifact

const usePool = () => {
  const { active, library, chainId } = useWeb3React()

  const address = addresses.find((elem) => elem.chainId == chainId)
  const web3 = library as Web3
  const pool = useMemo(() => {
    if (active && chainId && address) return new web3.eth.Contract(abi as AbiItem[], address.address)
  }, [active, chainId, web3?.eth?.Contract])

    return pool
}

export default usePool
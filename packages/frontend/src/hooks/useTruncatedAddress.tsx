import { useMemo } from 'react'

const useTruncatedAddress = (account: string) => {
  const truncated = useMemo(
    () => `${account?.substring(0, 6)}...${account?.substring(-4)}`,
    [account],
  )

  return truncated
}

export default useTruncatedAddress

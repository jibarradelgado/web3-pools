import React, { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Menu,
  Container,
  Image,
  Dropdown,
  Icon,
  Label,
  LabelDetail,
  LabelGroup,
} from 'semantic-ui-react'

import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { connector } from '@/config/web3'
import Web3 from 'web3'

import useTruncatedAddress from '@/hooks/useTruncatedAddress'
import useGetDBUser from '@/hooks/useGetDBUser'

const Navbar = () => {
  const [balance, setBalance] = useState(0)
  const { active, activate, deactivate, account, error, library } =
    useWeb3React()

  const web3 = library as Web3
  const isUnsupportedChain = error instanceof UnsupportedChainIdError
  const user = useGetDBUser(account!)

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', 'true')
  }, [activate])

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  const getBalance = useCallback(async () => {
    if (account) {
      const toSet = await web3.eth.getBalance(account)
      setBalance(Number((Number(toSet) / 1e18).toFixed(2)))
    }
  }, [web3?.eth, account])

  useEffect(() => {
    if (active) getBalance()
  }, [active, getBalance])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect()
  }, [connect])

  const truncatedAddress = useTruncatedAddress(account!)

  const trigger = (
    <Label
      color='teal'
    >
      {truncatedAddress}
      <LabelDetail>
        ~{balance} Ξ
      </LabelDetail>
    </Label>
  )

  return (
    <Menu size="small" borderless pointing as="header">
      <Container>
        <Menu.Menu position="right">
          <Menu.Item>
            {active ? (
              <>
              <LabelGroup>
                <Dropdown trigger={trigger}>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={disconnect}>Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </LabelGroup>
              </>
            ) : (
              <Button
                onClick={connect}
                disabled={isUnsupportedChain}
              >
                {isUnsupportedChain ? 'Not supported Chain' : 'Connect wallet'}
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar

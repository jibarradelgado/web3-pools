import React, { useState } from 'react'
import { Item, Button, Divider, Modal, Input } from 'semantic-ui-react'
import { ReserveUserData } from '@/types/AaveAppTypes'

type PoolProps = {
  reserveData: ReserveUserData
}

const Pool = ({reserveData}: PoolProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const name = reserveData.symbol
  const apy = reserveData.liquidityRate
  const [balance, setBalance] = useState(reserveData.aToken)

  return (
    <>
      <Item>
        <Item.Content className="pool-content">
          <div className='pool-field'>Asset: {name}</div>
          <div className='pool-field'>Balance: {balance}</div>
          <div className='pool-field'>APY {Number(apy.toFixed(3))}%</div>
          <div className='pool-field'>
            <Button type="button" onClick={() => setModalOpen(true)} >Supply</Button>
          </div>
        </Item.Content>
      </Item>
      <Modal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        size='mini'
      >
        <Modal.Header>Supply {name}</Modal.Header>
        <Modal.Content>
          <Input type="number" placeholder="0.00" />
        </Modal.Content>
        <Modal.Actions>
          <Button>Approve to continue</Button>
          <Button>Supply</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default Pool

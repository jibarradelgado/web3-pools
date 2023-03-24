import React, { useState } from 'react'
import { Item, Button, Divider, Modal, Input } from 'semantic-ui-react'

const Pool = () => {
  const [modalOpen, setModalOpen] = useState(false)


  return (
    <>
      <Item>
        <Item.Content className="pool-content">
          <div>Asset: USDT</div>
          <div>Balance: 9,000</div>
          <div>APY 59%</div>
          <div>
            <Button type="button" onClick={() => setModalOpen(true)} >Supply</Button>
          </div>
        </Item.Content>
      </Item>
      <Modal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
        size='mini'
      >
        <Modal.Header>Supply Coin</Modal.Header>
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

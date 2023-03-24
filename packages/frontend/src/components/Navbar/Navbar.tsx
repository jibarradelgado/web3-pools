import React from 'react'
import { Button, Menu, Container, Image } from 'semantic-ui-react'

const Navbar = () => {

  return (
    <Menu size='small' borderless pointing as="header">
      <Container>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button type="button" >Connect Wallet</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
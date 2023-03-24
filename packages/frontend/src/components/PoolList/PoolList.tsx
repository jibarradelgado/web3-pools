import Pool from 'components/Pool/Pool'
import React, { useState, useEffect} from 'react'

import { Item } from 'semantic-ui-react'

export const PoolList = () => {

  const renderList = () => {
    return (
      <>
      <Item.Group divided>
        <Pool />
        <Pool />
      </Item.Group>
      </>
    )
  }

  return renderList()
}
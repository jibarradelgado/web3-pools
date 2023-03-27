import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'

import Navbar from 'components/Navbar/Navbar'

const siteTitle = 'Poolparty'

type LayoutProps = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({children, title}: LayoutProps) => (
  <>
    <Head>
        <title>{!title ? siteTitle : `${title} | ${siteTitle}`}</title>
        <meta name="description" content="Deposit crypto to Aave protocol's pools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <Container as="main">
      {children}
    </Container>
  </>
)

export default Layout
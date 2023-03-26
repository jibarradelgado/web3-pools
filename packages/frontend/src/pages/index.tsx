import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web3ReactProvider } from "@web3-react/core"

import { getLibrary  } from '@/config/web3'
import MainAppWrapper from 'components/MainApplication/MainAppWrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Web3ReactProvider
      getLibrary={getLibrary}
    >
      <MainAppWrapper />
    </Web3ReactProvider>
  )
}

import { useMemo, useEffect, useState } from 'react'
import axios from 'axios'

import { baseUrl } from '@/config/service/config'

type User = {
  id: number
  wallet_address: string
}

const useGetDBUser = (account: string) => {
  const user = useEffect(() => {
    if(account){
      axios.get(`${baseUrl}/users/wallet/${account}`)
        .then((res) => {
          const user = res.data as User
          if (!user) {
            axios.post(`${baseUrl}/users/user`, {
              "wallet_address": account
            })
            .then((res) => {
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error)
            })
          }
          else {
            console.log('User already exists in DB')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  , [account])
  return user
}

export default useGetDBUser
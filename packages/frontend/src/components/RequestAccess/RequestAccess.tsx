import { Icon, Message } from 'semantic-ui-react'

const RequestAccess = () => {
  return (
    <Message icon info>
      <Icon name='ethereum' />
      <Message.Content>
        <Message.Header>Connect to MetaMask</Message.Header>
        In order to access the app you need to connect to your MetaMask wallet.
      </Message.Content>
    </Message>
  )
}

export default RequestAccess
# web3-pools

The project is divided in two packages: backend and frontend
The env vars for backend are: 

DATABASE_URL={Database_url}
PORT={Port}

The env var for frontend is: 
NEXT_PUBLIC_SERVICE_URL={base-url:port of backend}

On the backend the controllers have rest endpoints to create and get users, pools and deposits. 
Get: 
  /pools
  /pools/:id
  /users
  /users/wallet/:wallet
  /users/id/:userDatabaseID
  /deposits
  /deposits/:poolName 

Post:
  /pools/pool
  /users/user
  /deposits/deposit

On the frontend we can connect to metamask and observe the available pools depending on the chain we are connected. 
Current interaction with backend is the creation of new users in the DB when they connect their wallet.
At the current moment it cannot supply tokens. 

![image](https://user-images.githubusercontent.com/7384061/227927617-045e7c32-90a0-42fd-93c7-9dca09050e66.png)

# web3-pools

The project is divided in two packages: backend and frontend
The env vars for backend are: 

DATABASE_URL={Database_url}
PORT={Port}

The env var for frontend is: 
NEXT_PUBLIC_SERVICE_URL={base-url:port of backend}

On the backend the controllers have rest endpoints to create and get users, pools, deposits and withdrawals. 

On the frontend we can connect to metamask and observe the available pools depending on the chain we are connected. 
At the current moment it cannot supply tokens. 

![image](https://user-images.githubusercontent.com/7384061/227927617-045e7c32-90a0-42fd-93c7-9dca09050e66.png)

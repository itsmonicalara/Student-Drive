# Student-Drive

Web application based on blockchain that allows users to offer and accept rides through a bidding system and using ethereum as currency.

## Software Requirements 

Having installed the latest version of [NodeJS](https://nodejs.org/es/download/) in your computer.

Having installed and added the plugin of [Metamask](https://metamask.io/).

Having installed the latest version of [Ganache](https://trufflesuite.com/ganache/).

## Installation

The following commands must be run inside the project terminal.

To install all necessary dependencies.
```bash
npm i 
```
To install truffle. 
```bash
npm install -g truffle
```

To run the migrations which allow the deployment contracts to the Ethereum network.
```bash
truffle compile
truffle migrate
```

To run the frontend server
```bash
npm run dev
```

Once all the installs are finished, open  [http:localhost:3000](http:localhost:3000) to see the app deployed.

## Blockchain connection

Once having the Metamask plugin running in a Chrome window you´ll need to do the following:

1. Config a Metamask server and import Ganache account (using the private key from one of the available Ganache accounts).

![Config Server.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6897a0f5-8463-402a-9e19-c55012ceb832/Config_Server.png)

2. Start Ganache in port 7545.

## Project Contributors

Mónica Lara Pineda A01655306

Omar Alejandro Robledo Rodríguez A01338010

Raúl González Cardona A01654995

Víctor Antonio Godínez Rodríguez A01339529
 

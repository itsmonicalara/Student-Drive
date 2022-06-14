# Student-Drive

Web application based on blockchain that allows users to offer and accept rides through a bidding system while using ethereum as currency.

## Software Requirements 

Having installed the latest version of [NodeJS](https://nodejs.org/es/download/) in your computer.

Having installed the latest version of [Metamask](https://metamask.io/).

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

## How To
The following section has the purpose to explain how to run the application as well as to give an overview of how it works.

1. Run the application.
```bash
npm run dev
```
2. Open  [http:localhost:3000](http:localhost:3000) to see the app deployed.

3. Start the [Ganache](https://trufflesuite.com/ganache/) app and use the port 7545 as workspace.

4. Open [Metamask](https://metamask.io/) and add its plugin.
5. You´ll need to configure a local network using the port 7545 (the one used for [Ganache](https://trufflesuite.com/ganache/))

## Blockchain connection

Once having the Metamask plugin running in a Chrome window you´ll need to do the following:

1. Config a Metamask server and import Ganache account (using the private key from one of the available Ganache accounts).

![Config Server.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6897a0f5-8463-402a-9e19-c55012ceb832/Config_Server.png)

2. 

## Project Contributors

Mónica Lara Pineda A01655306

Omar Alejandro Robledo Rodríguez A01338010

Raúl González Cardona A01654995

Víctor Antonio Godínez Rodríguez A01339529
 

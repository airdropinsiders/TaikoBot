# TAIKO & EVM TX & DEPLOYER BOT
The Evm Testnet Bot is a powerful tool designed for interacting with EVM-compatible networks. This bot automates transaction processes, enabling users to perform actions such as ETH to WETH swap interactions seamlessly and daily. Additionally, it provides a built-in smart contract deployment feature, making it an ideal solution for you to do your testnet airdrop.

## Prerequisite
- Git
- Node JS (v22)

## Join My Telegram Channel

Join Here
[**https://t.me/airdropinsiderid**](https://t.me/airdropinsiderid).


## BOT FEATURE
- Multi Account 
- Support PK & SEED
- Auto TX Daily (Wrap Unwrap ETH)
- Deploy Smart Contract


## Setup & Configure BOT

### Linux
1. Clone project repo
   ```
   git clone https://github.com/vinskasenda/TaikoBot.git && cd TaikoBot
   ```
2. Run
   ```
   npm install
   ```
3. Run
   ```
   cp -r accounts/accounts_tmp.js accounts/accounts.js && cp -r config/config_tmp.js config/config.js
   ```
4. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
5. Configure the bot config
    ```
   nano config/config.js
    ```
6. To run Auto TX
   ```
   npm run start
   ```
7. To run Contract Deployer
    ```
    npm run deploy
    ```
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/vinskasenda/TaikoBot.git
   ```
   and cd to project dir
   ```
   cd TaikoBot
   ```
3. Run 
   ```
   npm install
   ```
5. Navigate to `TaikoBot` directory. 
6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.
7. Now open `acccounts.js` and setup your accounts. 
8. Now Back to `TaikoBot` directory and Navigate to `config` and rename `config_tmp.js` to `config.js` adjust the `config.js` as needed.
9.  Back to `TaikoBot` directory.
10. To start the app open your `Command Prompt` or `Power Shell`
11. To run auto Tx Bot
    ```
    npm run start
    ```
12. To run Smart Contract Deployer
    ```
    npm run deploy
    ```

## Update Bot

To update bot follow this step :
1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot

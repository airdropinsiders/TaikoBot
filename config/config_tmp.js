export class Config {
  static WRAPUNWRAPCOUNT = 10; //1 WRAPUNWRAPCOUNT = 2x TX (Wrap / Unwrap) OR (SWAP ETH TO WETH AND SWAP BACK)
  static TXAMOUNTMIN = 0.0001; //TX AMOUNT MIN
  static TXAMOUNTMAX = 0.001; //TX AMOUNT MAX
  static GWEIPRICE = 0.15; //GWEI PRICE
  static WAITFORBLOCKCONFIRMATION = true; //IF TRUE AFTER TX EXECUTED BOT WILL WAIT TX TO BE MINED FIRST, IF FALSE AFTER TX EXECUTED BOT WILL CONTINUE TO NEXT TX

  //NETWORK PROVIDER RPC
  static RPC = {
    CHAINID: 167000,
    RPCURL: "https://rpc.mainnet.taiko.xyz",
    EXPLORER: "https://taikoscan.io/",
    SYMBOL: "ETH",
  };
  //WETH CONTRACT
  static WETHCONTRACTADDRESS = "0x4200000000000000000000000000000000000006";
}
import { Config } from "../../../config/config.js";

export class RPC {
  static CHAINID = Config.RPC.CHAINID ?? 167000;
  static RPCURL = Config.RPC.RPCURL ?? "https://rpc.mainnet.taiko.xyz";
  static EXPLORER = Config.RPC.EXPLORER ?? "https://taikoscan.io/";
  static SYMBOL = Config.RPC.SYMBOL ?? "ETH";
}

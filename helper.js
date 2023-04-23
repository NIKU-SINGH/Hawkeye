import { JsonRpc } from "node-jsonrpc-client";
const addr = "192.168.0.107";
const rpc = new JsonRpc(`http://${addr}:8339`);

export const getTips = async () => {
  try {
    const res = await rpc.call("get_tips", { active_only: false });
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// export const getLatestBlock = async () => {
//   try {
//     const params = { window: 3 };
//     const res = await rpc.call("get_latest_blocks", params);
//     console.log(res);
//     return res.result;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

export const getBlockByHash = async (hash) => {
  try {
    const params = { hash: hash };
    const res = await rpc.call("get_block", params);
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getBlockByHeight = async (height) => {
  try {
    const params = { height: height };
    const res = await rpc.call("get_block", params);
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addNode = async (
  nameName,
  rpcHost,
  rpcPort,
  mirrorRpcPort,
  user,
  pass,
  archive
) => {
  try {
    const params = {
      name: node_name,
      rpc_host: rpcHost,
      rpc_port: rpcPort,
      mirror_rpc_port: mirrorRpcPort,
      user: user,
      pass: pass,
      archive: archive,
    };
    const res = await rpc.call("add_node", params);
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const removeNode = async (id) => {
  try {
    const res = await rpc.call("remove_node", { id: id });
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getBlockFromPeer = async (hash) => {
  try {
    const res = await rpc.call("get_block_from_peer", { hash: hash });
    return res.result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

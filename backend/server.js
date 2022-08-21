const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = __dirname + "/deposit.proto";
const SERVER_URI = "0.0.0.0:9090";
// console.log(PROTO_PATH)

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// implement the handlers here
const deposit = (call, callback) => {
  // console.log(call.request); // { address: 'mock address', amount: '520' }
  // const address = call.request;
  // console.log("address in deposit fn from backend", address);
  const { address, amount } = call.request;
  console.log(address, amount);
  callback(null, {
    error: 0,
    msg: `Deposit ${amount} to ${address} successfully`,
  });
};

const server = new grpc.Server();

server.addService(protoDescriptor.DepositService.service, {
  deposit,
});

server.bind(SERVER_URI, grpc.ServerCredentials.createInsecure());

server.start();
// console.log(PROTO_PATH);
console.log("Server is running!");

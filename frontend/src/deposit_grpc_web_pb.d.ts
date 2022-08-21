import * as grpcWeb from 'grpc-web';

import * as src_deposit_pb from '../src/deposit_pb';


export class DepositServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deposit(
    request: src_deposit_pb.DepositReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: src_deposit_pb.DepositRes) => void
  ): grpcWeb.ClientReadableStream<src_deposit_pb.DepositRes>;

}

export class DepositServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deposit(
    request: src_deposit_pb.DepositReq,
    metadata?: grpcWeb.Metadata
  ): Promise<src_deposit_pb.DepositRes>;

}


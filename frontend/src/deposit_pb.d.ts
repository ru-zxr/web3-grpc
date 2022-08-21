import * as jspb from 'google-protobuf'



export class DepositReq extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): DepositReq;

  getAmount(): string;
  setAmount(value: string): DepositReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositReq.AsObject;
  static toObject(includeInstance: boolean, msg: DepositReq): DepositReq.AsObject;
  static serializeBinaryToWriter(message: DepositReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositReq;
  static deserializeBinaryFromReader(message: DepositReq, reader: jspb.BinaryReader): DepositReq;
}

export namespace DepositReq {
  export type AsObject = {
    address: string,
    amount: string,
  }
}

export class DepositRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): DepositRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRes.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRes): DepositRes.AsObject;
  static serializeBinaryToWriter(message: DepositRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRes;
  static deserializeBinaryFromReader(message: DepositRes, reader: jspb.BinaryReader): DepositRes;
}

export namespace DepositRes {
  export type AsObject = {
    msg: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}


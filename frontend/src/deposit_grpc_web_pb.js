/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./deposit_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DepositServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DepositServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DepositReq,
 *   !proto.DepositRes>}
 */
const methodDescriptor_DepositService_deposit = new grpc.web.MethodDescriptor(
  '/DepositService/deposit',
  grpc.web.MethodType.UNARY,
  proto.DepositReq,
  proto.DepositRes,
  /**
   * @param {!proto.DepositReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DepositRes.deserializeBinary
);


/**
 * @param {!proto.DepositReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DepositRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DepositRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DepositServiceClient.prototype.deposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/DepositService/deposit',
      request,
      metadata || {},
      methodDescriptor_DepositService_deposit,
      callback);
};


/**
 * @param {!proto.DepositReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DepositRes>}
 *     Promise that resolves to the response
 */
proto.DepositServicePromiseClient.prototype.deposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/DepositService/deposit',
      request,
      metadata || {},
      methodDescriptor_DepositService_deposit);
};


module.exports = proto;


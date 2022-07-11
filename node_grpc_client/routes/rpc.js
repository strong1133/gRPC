const PROTO_PATH = "./protos/helloworld.proto";
var express = require("express");
var router = express.Router();
const { responseDtoJson } = require("../utils/responseDto");

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const rpc = protoDescriptor.helloworld;
var client = new rpc.Greeter("localhost:4000", grpc.credentials.createInsecure());

router.post("/", async (req, res, next) => {


    await client.sayHello({ name: req.body["name"] }, async (err, response) => {
        responseDtoJson(null, null, response.message, res);
    });

});

module.exports = router;

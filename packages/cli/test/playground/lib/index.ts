import { MainStack as ApiStack } from "./api-stack";
//import { MainStack as AnotherStack } from "./cron-stack";
//import { MainStack as AnotherStack } from "./table-stack";
//import { MainStack as AnotherStack } from "./table-to-kinesis-stack";
//import { MainStack as AnotherStack } from "./topic-stack";
//import { MainStack as AnotherStack } from "./topic-to-queue-stack";
//import { MainStack as AnotherStack } from "./app-sync-api-stack";
//import { MainStack as AnotherStack } from "./api-with-lambda-authorizer";
//import { MainStack as AnotherStack } from "./websocket-api-stack";
//import { MainStack as AnotherStack } from "./kinesis-stream";
//import { MainStack as AnotherStack } from "./apiv1-stack";
import * as sst from "@serverless-stack/resources";

export default function main(app: sst.App): void {
  new ApiStack(app, "api");
  //new AnotherStack(app, "another");
}

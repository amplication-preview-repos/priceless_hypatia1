import { Module } from "@nestjs/common";
import { BaseWebSocketService } from "./basewebsocket.service";
import { BaseWebSocketController } from "./basewebsocket.controller";
import { BaseWebSocketResolver } from "./basewebsocket.resolver";

@Module({
  controllers: [BaseWebSocketController],
  providers: [BaseWebSocketService, BaseWebSocketResolver],
  exports: [BaseWebSocketService],
})
export class BaseWebSocketModule {}

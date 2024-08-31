import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BaseWebSocketService } from "./basewebsocket.service";

@swagger.ApiTags("baseWebSockets")
@common.Controller("baseWebSockets")
export class BaseWebSocketController {
  constructor(protected readonly service: BaseWebSocketService) {}
}

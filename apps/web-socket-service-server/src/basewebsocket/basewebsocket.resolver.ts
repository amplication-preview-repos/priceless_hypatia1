import * as graphql from "@nestjs/graphql";
import { BaseWebSocketService } from "./basewebsocket.service";

export class BaseWebSocketResolver {
  constructor(protected readonly service: BaseWebSocketService) {}
}

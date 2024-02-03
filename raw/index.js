import Server from "./modules/server";
import Controller from "./modules/controller/controller";

Server.on("request", Controller);

import Http from "http";

const Server = Http.createServer();
const Port = process.env._port ?? 80;
Server.listen(Port, () => {
  console.log("Listening on : http://dev.yesh:" + Port);
});

export default Server;

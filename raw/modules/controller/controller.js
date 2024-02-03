import Model from "../model/model";
import View from "../view/view";
import fs from "fs";

export default async function Controller(req, res) {
  const incomingURL = req.url;
  const path = incomingURL.split("/");

  if (incomingURL === "/favicon.ico") {
    return res.end("");
  } else if (incomingURL.startsWith("/static")) {
    fs.readFile(`${process.env._rootpath}${incomingURL}`, (err, data) => {
      if (err) res.end();
      res.end(data);
    });
  } else {
    if (path.length <= 2) {
      const userQuery = path[1].length ? path[1] : "landon";
      const dataFromModel = await Model({ place: userQuery });
      const appPage = View({ place: userQuery, essentials: dataFromModel });
      res.end(appPage);
    } else {
      res.writeHead(404, "Something Went Wrong");
      res.end("");
    }
  }
}

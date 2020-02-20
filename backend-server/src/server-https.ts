import errorHandler from "errorhandler";

import app from "./app";
import https from "https";
import fs from "fs";

/**
 *  Generate yours keys in OpenSLL and put them in security folder
 *  OpenSSL> req -newkey rsa:2048 -nodes -keyout keytemp.pem -x509 -days 365 -out cert.pem
 *  OpenSSL> rsa -in keytemp.pem -out key.pem
 */

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

const PORT = app.get("port");
const httpsOptions = {
  key: fs.readFileSync("./security/key.pem"),
  cert: fs.readFileSync("./security/cert.pem")
};
/**
 * Start Express server.
 */

const server: https.Server = https
  .createServer(httpsOptions, app)
  .listen(PORT, () => {
    console.log(
      "App is running at https://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
  });

export default server;

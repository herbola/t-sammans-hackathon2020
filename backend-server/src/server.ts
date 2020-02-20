import errorHandler from "errorhandler";

import app from "./app";

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

/**
 * Start Express server.
 */

const server = app.listen(PORT, () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;

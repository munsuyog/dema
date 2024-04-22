'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    let {Server} = require('socket.io')
    let io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://154.53.59.178:30002",
        methods: ["GET", "POST"],
        allowedHeaders: ["http://154.53.59.178:30003", "http://localhost:3000"],
        credentials: true
      }
    })
    io.on("connection", (socket) => {
      console.log("User connected", socket.id)
    })
  },
};

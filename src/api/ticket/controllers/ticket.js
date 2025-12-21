'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ticket.ticket', ({ strapi }) => ({
  async create(ctx) {
    // This executes the default Strapi logic (saving to DB + uploading files)
    const response = await super.create(ctx);

    // This sends the 201 Created status back to your React app
    return ctx.send({
      message: "Ticket created successfully",
      data: response.data
    }, 201); 
  },
}));
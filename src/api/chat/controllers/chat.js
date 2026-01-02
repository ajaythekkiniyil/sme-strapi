'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chat.chat', ({ strapi }) => ({

  async find(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    const ticketDocumentId =
      ctx.query?.filters?.ticket?.documentId?.$eq;

    if (!ticketDocumentId) {
      return ctx.badRequest('ticket documentId is required');
    }

    // Resolve documentId → real ticket id
    const ticket = await strapi.db.query('api::ticket.ticket')
      .findOne({
        where: { documentId: ticketDocumentId },
        select: ['id', 'ticketCreatedBy', 'assignedSME'],
      });
    console.log("ticket", ticket);

    if (!ticket) {
      return ctx.notFound('Ticket not found');
    }

    // Authorization
    const allowed = 
      ticket.ticketCreatedBy === user.email ||
      ticket.assignedSME === user.email;

    if (!allowed) {
      return ctx.forbidden('You cannot access this ticket');
    }

    ctx.query.filters = {
      ticketId: ticketDocumentId
    };

    ctx.query.sort = ['createdAt:asc'];

    return await super.find(ctx);
  }

}));
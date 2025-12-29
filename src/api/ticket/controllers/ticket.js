'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ticket.ticket', ({ strapi }) => ({

  async create(ctx) {
    const response = await super.create(ctx);

    return ctx.send(
      {
        message: 'Ticket created successfully',
        data: response.data,
      },
      201
    );
  },

  async find(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('You must be logged in');
    }

    const isAdmin = user.customRole === 'admin';

    /**
     * ADMIN → see all tickets
     */
    if (isAdmin) {
      return await super.find(ctx);
    }

    /**
     * NON-ADMIN → see only:
     *  - tickets created by user
     *  - tickets assigned to user
     */
    ctx.query = {
      ...ctx.query,
      filters: {
        $or: [
          { ticketCreatedBy: user.email },
          { assignedSME: user.email },
        ],
      }
    };

    return await super.find(ctx);
  },

  // async findOne(ctx) {
  //   const user = ctx.state.user;
  //   const { id } = ctx.params;

  //   if (!user) return ctx.unauthorized();

  //   const ticket = await strapi.entityService.findOne(
  //     'api::ticket.ticket',
  //     id,
  //     {
  //       populate: ['createdBy', 'assignedSME'],
  //     }
  //   );

  //   if (!ticket) return ctx.notFound();

  //   const isAdmin = user.customRole === 'admin';

  //   if (
  //     !isAdmin &&
  //     ticket.createdBy?.id !== user.id &&
  //     ticket.assignedSME?.id !== user.id
  //   ) {
  //     return ctx.forbidden();
  //   }

  //   return ticket;
  // }

}));
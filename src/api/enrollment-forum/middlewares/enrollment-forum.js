'use strict';

/**
 * `enrollment-forum` middleware
 */

const populate = {
  Header: {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In enrollment-forum middleware.');

    await next();
  };
};

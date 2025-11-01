'use strict';

/**
 * `privacy-policy` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In privacy-policy middleware.');

    await next();
  };
};

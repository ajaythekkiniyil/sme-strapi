'use strict';

/**
 * `faq` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
  Main_content: {
    populate: '*'
  },
  Faq: {
    populate: '*'
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In faq middleware.');

    await next();
  };
};

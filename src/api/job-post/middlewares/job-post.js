'use strict';

/**
 * `job-post` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
  Job_post : {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In job-post middleware.');

    await next();
  };
};

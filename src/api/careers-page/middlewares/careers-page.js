'use strict';

/**
 * `careers-page` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
  Main_content : {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In careers-page middleware.');

    await next();
  };
};

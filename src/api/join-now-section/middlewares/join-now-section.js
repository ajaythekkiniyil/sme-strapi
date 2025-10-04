'use strict';

/**
 * `join-now-section` middleware
 */

const populate = {
  image_slider: {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In join-now-section middleware.');

    await next();
  };
};

'use strict';

/**
 * `about-us-page` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
  Main_content: {
    populate: '*'
  },
  Our_values: {
    populate: '*'
  },
  Image_slider: {
    populate: '*'
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In about-us-page middleware.');

    await next();
  };
};
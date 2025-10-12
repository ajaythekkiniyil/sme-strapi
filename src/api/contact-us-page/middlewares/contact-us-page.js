'use strict';

/**
 * `contact-us-page` middleware
 */

const populate = {
  Header: {
    populate: '*'
  },
  Get_in_touch: {
    populate: '*'
  },
  Image_slider: {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In contact-us-page middleware.');

    await next();
  };
};

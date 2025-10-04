'use strict';

/**
 * `expert-section` middleware
 */


const populate = {
  Experts: {
    populate: {
      profile: {
        populate: ['profile_image']
      }
    }
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In expert-section middleware.');

    await next();
  };
};


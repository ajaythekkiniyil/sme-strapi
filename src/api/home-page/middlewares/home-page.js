'use strict';

/**
 * `home-page` middleware
 */

const populate = {
  Hero_section: {
    populate: '*'
  },
  How_it_works: {
    populate: '*'
  },
  Why_sme_on_call: {
    populate: '*'
  },
  Services: {
    populate: {
      services_card: {
        populate: ['background_image']
      }
    }
  },
  Experts: {
    populate: {
      profile: {
        populate: ['profile_image']
      }
    }
  },
  Faq: {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In home-page middleware.');

    await next();
  };
};

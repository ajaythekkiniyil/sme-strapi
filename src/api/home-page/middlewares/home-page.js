'use strict';

/**
 * `home-page` middleware
 */

const populate = {
  Hero_section: {
    populate: '*'
  },
  // How_it_works: {
  //   populate: '*'
  // },
  // Why_SME_on_Call: {
  //   populate: '*'
  // },
  // Services: {
  //   populate: {
  //     services_card: {
  //       populate: ['image']
  //     }
  //   }
  // },
  // Constact_us: {
  //   populate: '*'
  // },
  // Experts: {
  //   populate: {
  //     experts: {
  //       populate: ['image']
  //     }
  //   }
  // }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In home-page middleware.');

    await next();
  };
};

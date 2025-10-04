'use strict';

/**
 * `sme-page` middleware
 */
const populate = {
  Header: {
    populate: '*'
  },
  Main_content: {
    populate: '*'
  },
  Image_slider: {
    populate: '*'
  },
  Benefits: {
    populate: '*'
  },
  How_we_work_together_section: {
    populate: '*'
  }
}

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In sme-page middleware.');

    await next();
  };
};

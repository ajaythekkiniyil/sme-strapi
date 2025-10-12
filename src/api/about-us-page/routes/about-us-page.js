'use strict';

/**
 * about-us-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::about-us-page.about-us-page', {
    config: {
        find: {
            middlewares: ['api::about-us-page.about-us-page']
        }
    }
});
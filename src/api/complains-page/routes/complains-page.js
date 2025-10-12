'use strict';

/**
 * complains-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::complains-page.complains-page', {
    config: {
        find: {
            middlewares: ['api::complains-page.complains-page']
        }
    }
});
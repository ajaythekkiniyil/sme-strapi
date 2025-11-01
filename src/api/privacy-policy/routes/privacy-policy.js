'use strict';

/**
 * privacy-policy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::privacy-policy.privacy-policy', {
    config: {
        find: {
            middlewares: ['api::privacy-policy.privacy-policy']
        }
    }
});
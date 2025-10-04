'use strict';

/**
 * sme-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sme-page.sme-page', {
    config: {
        find: {
            middlewares: ['api::sme-page.sme-page']
        }
    }
});
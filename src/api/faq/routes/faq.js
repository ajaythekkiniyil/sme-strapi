'use strict';

/**
 * faq router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::faq.faq', {
    config: {
        find: {
            middlewares: ['api::faq.faq']
        }
    }
});
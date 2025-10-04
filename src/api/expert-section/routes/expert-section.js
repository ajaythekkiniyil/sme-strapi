'use strict';

/**
 * expert-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::expert-section.expert-section', {
    config: {
        find: {
            middlewares: ['api::expert-section.expert-section']
        }
    }
});
'use strict';

/**
 * terms-and-condition router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::terms-and-condition.terms-and-condition', {
    config: {
        find: {
            middlewares: ['api::terms-and-condition.terms-and-condition']
        }
    }
});
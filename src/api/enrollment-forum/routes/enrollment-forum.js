'use strict';

/**
 * enrollment-forum router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::enrollment-forum.enrollment-forum', {
    config: {
        find: {
            middlewares: ['api::enrollment-forum.enrollment-forum']
        }
    }
});
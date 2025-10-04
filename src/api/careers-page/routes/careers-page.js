'use strict';

/**
 * careers-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::careers-page.careers-page', {
    config: {
        find: {
            middlewares: ['api::careers-page.careers-page']
        }
    }
});
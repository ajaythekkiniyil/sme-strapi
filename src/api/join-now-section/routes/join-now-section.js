'use strict';

/**
 * join-now-section router
 */

'use strict';

/**
 * join-now-section router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::join-now-section.join-now-section', {
    config: {
        find: {
            middlewares: ['api::join-now-section.join-now-section']
        }
    }
});
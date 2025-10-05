'use strict';

/**
 * job-post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job-post.job-post', {
    config: {
        find: {
            middlewares: ['api::job-post.job-post']
        }
    }
});

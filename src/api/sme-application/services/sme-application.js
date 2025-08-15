'use strict';

/**
 * sme-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sme-application.sme-application');

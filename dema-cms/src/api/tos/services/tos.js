'use strict';

/**
 * tos service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tos.tos');

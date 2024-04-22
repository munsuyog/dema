'use strict';

/**
 * returns service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::returns.returns');

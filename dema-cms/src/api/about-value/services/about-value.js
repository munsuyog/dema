'use strict';

/**
 * about-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-value.about-value');

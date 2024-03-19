'use strict';

/**
 * hero-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-product.hero-product');

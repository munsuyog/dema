'use strict';

/**
 * returns router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::returns.returns');

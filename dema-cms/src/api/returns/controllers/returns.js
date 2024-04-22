'use strict';

/**
 * returns controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::returns.returns');

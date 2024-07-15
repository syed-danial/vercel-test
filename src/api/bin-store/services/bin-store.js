'use strict';

/**
 * bin-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bin-store.bin-store');

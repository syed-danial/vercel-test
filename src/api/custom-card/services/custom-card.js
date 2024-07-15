'use strict';

/**
 * custom-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-card.custom-card');

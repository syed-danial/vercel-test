'use strict';

/**
 *  mobile-banner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mobile-banner.mobile-banner', () => ({
    async find(ctx) {
        const populateList = [
            "button",
            "button.text",
            "content",
            "content.image",
            "content.title",
            "content.subtitle"
          ];
          ctx.query.populate = populateList

          const content = await super.find(ctx);
          return content;
    },
  }))
  

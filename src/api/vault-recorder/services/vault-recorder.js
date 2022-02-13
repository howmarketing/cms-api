'use strict';

/**
 * vault-recorder service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vault-recorder.vault-recorder');

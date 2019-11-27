'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class bankaccount extends Model {
  static get computed () {
    return ['url_thumbnail']
  }

  getUrlThumbnail ({ thumbnail }) {
    return `${process.env.APP_URL}/files/${thumbnail}`
  }
}

module.exports = bankaccount

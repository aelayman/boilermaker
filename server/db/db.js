const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const todoapp = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${todoapp}`,
  {
    logging: false
  }
)
module.exports = db

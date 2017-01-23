module.exports = {

  testing: {
    client: 'postgreql',
    connection: {
      database: 'hanabi_testing'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  development: {
    client: 'postgreql',
    connection: {
      database: 'hanabi_development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {

  },
}

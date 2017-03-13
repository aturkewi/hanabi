// Update with your config settings.

module.exports = {

  development: {
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' },
    client: 'postgresql', 
    connection: {
      user: null,
      password: null,
      database: 'hanabi_development',
      charset: 'utf8',
    }
  },

  test: {
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' },
    client: 'postgresql', 
    connection: {
      user: null,
      password: null,
      database: 'hanabi_test',
      charset: 'utf8',
    }
  },

};

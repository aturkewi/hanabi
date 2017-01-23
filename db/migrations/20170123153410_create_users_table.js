
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', (t) => {
      t.increments('id').primary();
      t.string('firstName');
      t.string('lastName');
      t.string('username').unique();
      t.string('email').unique();
      t.string('password', 128);
      t.string('provider');
      t.string('providerId').unique();
      t.timestamps();
    }),

    knex.schema.createTable('games', (t) => {
      t.increments('id').primary();
      t.timestamps();
      t.integer('currentPlayerId').references('users.id');
      t.integer('clueCounter').defaultTo(8); // add default
      t.integer('missesRemaining').defaultTo(3); // add default
    }),

    knex.schema.createTable('cards', (t) => {
      t.increments('id').primary();
      t.string('color');
      t.string('number');
    }),

    knex.schema.createTable('hands', (t) => {
      t.increments('id').primary();
      t.integer('playerId').references('users.id');
      t.integer('gameId').references('games.id');
    }),

    knex.schema.createTable('gameCards', (t) => {
      t.increments('id').primary();
      t.enu('location', ['inDeck', 'inHand', 'played', 'discarded']);
      t.boolean('displayColor').defaultTo(false);
      t.boolean('displayNumber').defaultTo(false);
      t.integer('handId').references('hands.id').defaultTo(null);
      t.integer('cardId').references('cards.id');
      t.integer('gameId').references('games.id');
    })

  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('games'),
    knex.schema.dropTable('cards'),
    knex.schema.dropTable('hands'),
    knex.schema.dropTable('gameCards')
  ])
};

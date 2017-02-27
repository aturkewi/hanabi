
exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('users', (usersTable) => {
      // Primary Key
      usersTable.increments();
      
      // Data Columns
      usersTable.string('first_name', 25).notNullable()
      usersTable.string('last_name', 25).notNullable()
      usersTable.string('username', 50).notNullable().unique()
      usersTable.string('email', 100).notNullable().unique()
      usersTable.string('password', 128)
      
      // Timestamps
      usersTable.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
      usersTable.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('games', (gamesTable) => {
      // Primary Key
      gamesTable.increments();
      
      // Timestamps
      gamesTable.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
      gamesTable.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('hands', (handsTable) => {
      // Primary Key
      handsTable.increments();
      
      // Foreign Keys
      handsTable.integer('gamed_id').notNullable();
      handsTable.integer('user_id').notNullable();
    })
    .createTable('games_cards', (gameCardsTable) => {
      // Primary Key
      gameCardsTable.increments();
      
      // Foreign Keys
      gameCardsTable.integer('game_id').notNullable();
      gameCardsTable.integer('hand_id');
      
      // Data Columns
      gameCardsTable.enu('location', 
        ['deck', 'played', 'discarded', 'in_hand']);
      gameCardsTable.boolean('display_color').defaultTo(false);
      gameCardsTable.boolean('display_number').defaultTo(false);
      gameCardsTable.string('color');
      gameCardsTable.integer('number')
    })
};

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('games_cards')
    .dropTableIfExists('hands')
    .dropTableIfExists('games')
    .dropTableIfExists('users')
};

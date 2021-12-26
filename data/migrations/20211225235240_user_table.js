exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();

      users
        .string('username', 128)
        .notNullable()
        .unique().index();  //this creates index for username

      users
        .string('password', 128)
        .notNullable();
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('animals', function(table) {
  	table.increments()
  	table.string('name')
  	table.string('type')
  	table.string('food')
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('animals')
};

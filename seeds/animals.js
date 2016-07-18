
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('animals').insert({id: 1, name: 'Georgie', type: 'giraffe', food: 'pizza'}),
        knex('animals').insert({id: 2, name: 'John', type: 'hippo', food: 'cabbage'}),
        knex('animals').insert({id: 3, name: 'Shenzi', type: 'hyena', food: 'antelope'})
      ]);
    });
};

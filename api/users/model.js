const db = require('../../data/dbConfig');

function findAll() {
  return db('users');
}

function findOne(filter) {
  return db('users as u')
    .select('u.id', 'u.username', 'u.password', 'u.department')
    .where(filter);
}

function findById(id) {
  return db('users as u')
    .select('u.id', 'u.username', 'u.password', 'u.department')
    .where('u.id', id)
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');
  return findById(id);
}

module.exports = {
  findAll,
  findOne,
  findById,
  add,
};

const Todo = require('./todo');

Todo.methods(['get','post','put','delete']);

Todo.updateOptions({
  new: true, // after the update return the new object
  runValidators: true // validate the schema on update
});

module.exports = Todo;
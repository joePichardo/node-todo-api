const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove('58307a0c3284377b70aa99bc').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '58307a0c3284377b70aa99bc'}).then((todo) => {
  console.log(todo);
});

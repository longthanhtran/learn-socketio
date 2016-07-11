module.exports = todoApp;

var addTodo = require('./actions');

function todoApp(state, action) {
  var state = intialState || [];
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
  }
};

var React = require('react');

var Main = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
        id: 1,
        text: "Groceries"
      },
      {
        id: 2,
        text: "shopping"
      }
      ]
    };
  },
  render: function (){
    return (
      <div>
        TodoApp.jsx
      </div>
    )
  }
});

module.exports = Main;

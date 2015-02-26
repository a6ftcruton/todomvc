'use strict'

// Save common selectors
var jQ = {
  newTodo: $("#new-todo"), 
  todoList: $("#todo-list")
}

var App = {

  init: function() {
    this.renderTodos();
    this.createTodo();   
    this.deleteTodo();   
  },

  renderTodos: function() {
    if(localStorage.getItem('todos')) {
      jQ.todoList.html(localStorage.getItem('todos')); 
    }
  }, // end renderTodos

  deleteTodo: function() {
    $('.delete').click(function() {
      var todos;
      $(this).closest("li").remove();
      todos = jQ.todoList.html();
      localStorage.setItem("todos", todos); 
    });
  }, // end deleteTodo

  createTodo: function() {

    jQ.newTodo.keydown(function(e){

      var input = jQ.newTodo.val();

      if(e.keyCode == 13) {
        if(!input.trim()) {
          $('#alert').html("<p>Cannot submit a blank todo</p>")
                     .fadeIn("slow").delay(1400).fadeOut("slow");
          return false; //prevent browser from reading rest of this script
        } else {
            var todos;
            var clear = '<h3 class="delete">' + "X" + '</h3>';
            var todo = { name: "<li class='todo name'>" + input + clear + "</li>", }
            jQ.todoList.append(todo.name);
            $('#form')[0].reset();
            todos = jQ.todoList.html();
            localStorage.setItem("todos", todos);
            return false;
        }
      }
    });
  } //end createTodo


}; // end App

App.init();


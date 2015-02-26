'use strict'

// Common selectors
var jQ = {
  newTodo: $("#new-todo"), 
  todoList: $("#todo-list")
};

// App Methods
var App = {

  init: function() {
    this.renderTodos();
    this.deleteTodo();   
    this.createTodo();   
  },

  renderTodos: function() {
    if(localStorage.getItem('todos')) {
      jQ.todoList.html(localStorage.getItem('todos')); 
    }
  },

  deleteTodo: function() {
    $('.delete').click(function() {
      var remainingTodos;
      $(this).closest("li").remove();
      remainingTodos = jQ.todoList.html();
      App.setItem(remainingTodos);
    });
  },

  createTodo: function() {
    jQ.newTodo.keydown(function(e){
      var input = jQ.newTodo.val();
      if(e.keyCode == 13) {
        if(!input.trim()) {
          App.checkInput();
          return false;
        } else {
            var todos;
            var clear = '<h3 class="delete">' + "X" + '</h3>';
            var todo = "<li class='todo name'>" + input + clear + "</li>";
            jQ.todoList.append(todo);
            $('#form')[0].reset();
            todos = jQ.todoList.html();
            App.setItem(todos);
        }
      }
    });
  }, 

  // Helper methods
  setItem : function(items) {
    localStorage.setItem("todos", items)
  },

  checkInput: function() {
    $('#alert').html("<p>Cannot submit a blank todo</p>")
               .fadeIn(1200).delay(1200).fadeOut("slow");
  }
}; // end App

App.init();


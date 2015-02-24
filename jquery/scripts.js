'use strict'

var App = {

  init: function() {
    this.renderTodos();
    this.createTodo();   
  },

  createTodo: function() {
    $('#new-todo').keydown(function(e){
      var name = $('#new-todo').val();
      if(e.keyCode == 13) {
        if(!name.trim()) {
          $('#alert').html("<p>Cannot submit a blank todo</p>")
                     .fadeIn("slow").delay(1400).fadeOut("slow");
          return false; //prevent browser from reading rest of this script
        } else {
            $('#todo-list').prepend('<li class="todo">' + name + '</li>' + '<h2 class="delete-x">' + "X" + '</h2>')
            $('#form')[0].reset();
            var todos = $('#todo-list').html();
            localStorage.setItem("todos", todos);
            return false;
        }
      }
    });
  }, //end createTodo

  renderTodos: function() {
    if(localStorage.getItem('todos')) {
      $('#todo-list').html(localStorage.getItem('todos')); 
    }
  }

}; // end App

$(document).ready(function() {
  App.init();
});


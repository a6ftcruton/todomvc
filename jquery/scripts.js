'use strict'

var App = {

  init: function() {
    this.renderTodos();
    this.createTodo();   
  },

  renderTodos: function() {
    
  },

  createTodo: function() {
    $('#new-todo').focus(function(){
      console.log("clicking in input");
    });
  }

}; // end App

$(document).ready(function() {
  App.init();
});


class TodosController < ApplicationController
  before_action :index
  respond_to :html, :js

  def index
    @todos = Todo.all
    @todo = Todo.new
  end

  def create
    @todo = Todo.create(todo_params)
  end

  def update

  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
  end

  private


  def todo_params
    params.require(:todo).permit(:name)
  end
end

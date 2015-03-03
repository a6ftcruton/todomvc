class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name
    end
  end
end

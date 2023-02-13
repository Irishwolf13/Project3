class CreateComment < ActiveRecord::Migration[6.1]
  def change
    create_table :Comments do |t|
      t.string :comment
      t.integer :solution_id
      t.integer :user_id
    end
  end
end

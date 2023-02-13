class CreateSolution < ActiveRecord::Migration[6.1]
  def change
    create_table :Solutions do |t|
      t.string :solve
      t.integer :num_of_likes
      t.string :language
      t.integer :user_id
      t.integer :problem_id
    end
  end
end

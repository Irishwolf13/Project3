class CreateProblem < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |t|
      t.string :question
      t.string :difficulty
    end
  end
end

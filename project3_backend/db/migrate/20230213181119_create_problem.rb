class CreateProblem < ActiveRecord::Migration[6.1]
  def change
    create_table :Problems do |t|
      t.string :question
      t.string :difficulty
    end
  end
end

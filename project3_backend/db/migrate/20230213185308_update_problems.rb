class UpdateProblems < ActiveRecord::Migration[6.1]
  def change
    add_column :Problems, :date, :datetime
  end
end

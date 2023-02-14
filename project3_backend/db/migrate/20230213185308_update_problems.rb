class UpdateProblems < ActiveRecord::Migration[6.1]
  def change
    add_column :problems, :date, :datetime
  end
end

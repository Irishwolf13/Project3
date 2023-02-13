class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :Users do |t|
      t.string :user_name
      t.string :password
    end
  end
end

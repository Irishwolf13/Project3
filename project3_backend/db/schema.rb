# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_13_185308) do

  create_table "Comments", force: :cascade do |t|
    t.string "comment"
    t.integer "solution_id"
    t.integer "user_id"
  end

  create_table "Problems", force: :cascade do |t|
    t.string "question"
    t.string "difficulty"
    t.datetime "date"
  end

  create_table "Solutions", force: :cascade do |t|
    t.string "solve"
    t.integer "num_of_likes"
    t.string "language"
    t.integer "user_id"
    t.integer "problem_id"
  end

  create_table "Users", force: :cascade do |t|
    t.string "user_name"
    t.string "password"
  end

end

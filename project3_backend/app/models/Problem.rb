class Problem < ActiveRecord::Base
    has_many :solutions
    has_many :comments, through: :solutions
end

class Solution < ActiveRecord::Base
    belongs_to :problem
    belongs_to :user
    has_many :comments
end

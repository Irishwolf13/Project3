class User < ActiveRecord::Base
    has_many :solutions
    has_many :comments
end

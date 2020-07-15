class User < ApplicationRecord
  validates :email, presence: true

  has_many :favorites, class_name: 'UserFavorite'
end

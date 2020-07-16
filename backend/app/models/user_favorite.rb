class UserFavorite < ApplicationRecord
  validates :title, :external_url, :embed_url, presence: true
  validates :user, presence: true
  validates :image_type, inclusion: { in: %w(gif jpeg png) }
  
  belongs_to :user
end
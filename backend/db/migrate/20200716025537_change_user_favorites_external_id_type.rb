class ChangeUserFavoritesExternalIdType < ActiveRecord::Migration[6.0]
  def change
    change_column :user_favorites, :external_id, :string
  end
end

class CreateUserFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :user_favorites do |t|
      t.integer :external_id
      t.string :slug
      t.string :title, null: false
      t.string :external_url, null: false
      t.string :embed_url, null: false
      t.string :type

      t.timestamps
    end

    add_reference :user_favorites, :user, index: true
  end
end

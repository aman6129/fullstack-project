module Api
  class UserFavoritesController < ApplicationController
    protect_from_forgery prepend: true

    def index
      owner_email = params[:owner_email]
      if owner_email.nil?
        missing_owner
        return
      end
      
      favorites = User.find_by(email: owner_email)&.favorites || []
      render json: {favorites: favorites}, status: 200
    end

    def create
      owner_email = params[:owner_email]
      if owner_email.nil?
        missing_owner
        return
      end

      owner = User.find_by(email: owner_email)
      if owner.nil?
        owner = User.create!(email: owner_email)
      end
      
      attributes = favorite_attributes(params)
      new_favorite = UserFavorite.create!(**attributes)

      render json: { favorite: new_favorite }, status: 200
    end

    private

    def missing_owner
      render json: {message: 'Missing owner email'}, status: 400
    end

    def favorite_attributes(params)
      {
        title: params[:title],
        external_url: params[:external_url],
        embed_url: params[:embed_url],
        type: params[:type],
        external_id: params[:external_id],
        slug: params[:slug],
        user_id: owner.id
      }
    end
  end
end
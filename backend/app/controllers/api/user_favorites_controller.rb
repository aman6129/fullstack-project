module Api
  class UserFavoritesController < ApplicationController
    protect_from_forgery prepend: true

    def index
      return unless owner_present?(params)
      
      favorites = User.find_by(email: params[:owner_email])&.favorites || []
      render json: {favorites: favorites}, status: 200
    end

    def create
      return unless owner_present?(params)

      owner_email = params[:owner_email]
      owner = User.find_by(email: owner_email)
      if owner.nil?
        owner = User.create!(email: owner_email)
      end
      
      attributes = favorite_attributes(params, owner.id)
      new_favorite = UserFavorite.create!(**attributes)

      render json: { favorite: new_favorite }, status: 200
    end

    def destroy
      return unless owner_present?(params)

      owner = User.find_by(email: params[:owner_email])
      if owner.nil? 
        render json: { message: 'Owner not found' }, status: 400
        return
      end

      favorite = UserFavorite.find(params[:id])
      if favorite.user == owner
        favorite.destroy!
        render json: { favorite: favorite }, statust: 200
        return
      end

      render json: { message: 'Owner mismatch' }, status: 403
    end

    private

    def missing_owner
      render json: {message: 'Missing owner email'}, status: 400
    end

    def owner_present?(params)
      owner_email = params[:owner_email]
      missing_owner unless owner_email.present?
      
      owner_email.present?
    end


    def favorite_attributes(params, user_id)
      {
        title: params[:title],
        external_url: params[:external_url],
        embed_url: params[:embed_url],
        image_type: params[:image_type],
        external_id: params[:external_id],
        slug: params[:slug],
        user_id: user_id
      }
    end
  end
end
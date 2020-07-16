module Api
  class GiphyController < ApplicationController
    require 'net/http'
    require 'json'

    def search_giphy
      search_phrase = params[:search]

      if search_phrase.nil?
        render json: {message: 'Missing required param `search`'}, status: 400
        return
      end

      giphy_request_uri = generate_search_query(search_phrase)
      resp = Net::HTTP.get_response(URI.parse(giphy_request_uri))
      body = JSON.parse(resp.body)

      images = body["data"]
      serialized_images = images.map { |image| ::GiphyImageSerializer.call(image) }

      render json: { images: serialized_images }, status: 200
    end

    private 

    def generate_search_query(search_phrase)
      search_base_path = 'https://api.giphy.com/v1/gifs/search'
      api_key_param = "api_key=#{Rails.application.secrets.giphy_key}"
      search_phrase_param = "q=#{search_phrase}"
      limit_param = "limit=25"

      "#{search_base_path}?#{api_key_param}&#{search_phrase_param}&#{limit_param}"
    end
  end
end
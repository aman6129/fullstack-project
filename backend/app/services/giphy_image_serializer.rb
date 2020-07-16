class GiphyImageSerializer < ApplicationService
  attr_reader :image

  def initialize(image)
    @image = image
  end

  def call
    {
      title: @image["title"],
      external_url: @image["url"],
      embed_url: @image["images"]["fixed_height"]["url"],
      image_type: @image["type"],
      external_id: @image["id"],
      slug: @image["slug"],
    }
  end
end
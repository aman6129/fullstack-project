require 'rails_helper'

RSpec.describe User, type: :user do
  #tests go here
  let(:owner) {User.new(email: 'test@mail.com', favorites: [], name: 'John Smith' )}
  subject { UserFavorite.new(title: 'Fave1', external_url: 'url', embed_url: 'url', user: owner, image_type: 'gif' )}

  before { subject.save }

  it 'user is required' do
    subject.user = nil
    expect(subject).to_not be_valid
  end

  it 'title is required' do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it 'embed_url is required' do
    subject.embed_url = nil
    expect(subject).to_not be_valid
  end

  it 'external_url is required' do
    subject.external_url = nil
    expect(subject).to_not be_valid
  end

  it 'image_type is has to be correct type' do
    %w(gif jpeg png).each do |type|
      subject.image_type = type
      expect(subject).to be_valid
    end

    subject.image_type = '.wav'
    expect(subject).to_not be_valid
  end
end
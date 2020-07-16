require 'rails_helper'

RSpec.describe User, type: :user do
  subject { User.new(email: 'test@mail.com', favorites: [], name: 'John Smith' )}

  before { subject.save }

  it 'email is required' do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it 'name is not required' do
    subject.name = nil
    expect(subject).to be_valid
  end
end
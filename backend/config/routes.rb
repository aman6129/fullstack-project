Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :user_favorites, only: [:index, :create, :destroy]
    get 'search_giphy', action: :search_giphy, controller: 'giphy'
  end
end

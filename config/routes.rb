Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    resources :deaths, only: :index
    resources :seasons, only: :index do
      resources :episodes, only: :index
    end
  end
end

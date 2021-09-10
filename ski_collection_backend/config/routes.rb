Rails.application.routes.draw do
  resources :users
  resources :skis
  post '/login', to: 'application#login'
  get '/profile', to: 'users#profile'
end

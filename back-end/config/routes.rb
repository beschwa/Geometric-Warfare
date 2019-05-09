Rails.application.routes.draw do
  get '/ships', to:'ships#index'
  get '/stages', to:'stages#index'
  get '/leaderboards', to:'leaderboards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

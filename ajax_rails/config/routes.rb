Rails.application.routes.draw do
  resources :todos, only: [:index]

  root to: 'todos#index'
end

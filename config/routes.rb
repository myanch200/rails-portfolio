Rails.application.routes.draw do
  resources :projects
  root "pages#home"
  get "about", to: "pages#about", as: :about
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:destroy, :create]
    resources :books, only: [:show, :index] do  
        resources :reviews, only: [:create, :index]
    end 
    resources :reviews, only: [:show, :destroy, :update]
  end
 

  root to: 'static_pages#root'
end


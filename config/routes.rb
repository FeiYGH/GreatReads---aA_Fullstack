Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
  namespace :api, defaults: { format: :json } do
    # resources :users, only: [:create]
    resources :users, only: [:create] do
      resources :reviews, only: [:index]
      resources :comments, only: [:index]
    end
    resource :session, only: [:destroy, :create]
    resources :books, only: [:show, :index] do  
        resources :reviews, only: [:create, :index]
        # resources :comments, only: [:index, :create]
    end 
    resources :reviews, only: [:show, :destroy, :update] do
        resources :comments, only: [:create, :index, :show, :update]
    end 

    resources :comments, only: [:destroy]
    
  end
 

  root to: 'static_pages#root'
end


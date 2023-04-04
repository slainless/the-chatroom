Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope "/api" do
    post "user", to: "anon_user#create"
    get "user", to: "anon_user#get"

    get "room/:room_id", to: "public_message#find"
    post "room/:room_id", to: "public_message#create"
  end
end

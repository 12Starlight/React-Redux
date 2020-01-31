# Namespace Example
# config/routes.rb
namespace :api do 
  resources :cats, only: [:index]
end


=begin 
When we run rails routes, we get:

    Prefix Verb URI Pattern           Controller#Action
api_cats GET /api/cats(.:format) api/cats#index

=end 